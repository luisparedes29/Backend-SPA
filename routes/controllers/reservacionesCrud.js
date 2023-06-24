const Reservaciones = require('../../models/reservaciones')
const nodemailer = require('nodemailer')
const Mailgen = require('mailgen')
const Servicios = require('../../models/servicios')
//funcion para buscar todas las reservaciones
const getReservaciones = async (req, res) => {
  try {
    const reservaciones = await Reservaciones.find()
    res.status(200).json({ reservaciones })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para crear reservacion
const crearReservacion = async (req, res) => {
  try {
    let config = {
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    }

    let transporter = nodemailer.createTransport(config)

    let mailGenerator = new Mailgen({
      theme: 'default',
      product: {
        name: 'Toque Sanador',
        link: 'http://localhost:3000/',
      },
    })

    let { nombre, servicio, fecha, hora, personas } = req.body
    const servicioExistente = await Servicios.findOne({
      servicio: servicio,
    })
    // Obtener datos del servicio
    let name = nombre

    let response = {
      body: {
        greeting: '¡Hola!',
        signature: 'Luis Paredes',
        name,
        intro: '¡Tu reservación ha sido exitosa!',
        table: {
          data: [
            {
              servicio: servicio,
              precio: `$${servicioExistente?.precio}`,
              duracion: servicioExistente?.duracion,
              personas: personas,
              fecha: fecha,
              hora: hora,
            },
          ],
        },
        outro: '¡Esperamos seguir ofreciendo un servicio de calidad!',
      },
    }

    let mail = mailGenerator.generate(response)

    let message = {
      from: process.env.EMAIL,
      to: req.body.correo,
      subject: 'Reservacion',
      html: mail,
    }

    const reservacionCreada = await Reservaciones.create(req.body)
    let info = await transporter.sendMail(message)
    res.status(200).json({ reservacion: reservacionCreada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para editar una reservacion
const editarReservacion = async (req, res) => {
  try {
    const reservacionActualizada = await Reservaciones.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json({ reservacion: reservacionActualizada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para eliminar una reservacion
const eliminarReservacion = async (req, res) => {
  try {
    const reservacionEliminada = await Reservaciones.findByIdAndDelete(
      req.params.id
    )
    res.status(200).json({ reservacion: reservacionEliminada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

module.exports = {
  getReservaciones,
  crearReservacion,
  editarReservacion,
  eliminarReservacion,
}

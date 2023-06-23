const Reservaciones = require('../../models/reservaciones')

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
    const reservacionCreada = await Reservaciones.create(req.body)
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

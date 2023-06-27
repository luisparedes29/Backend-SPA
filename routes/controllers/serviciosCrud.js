const Servicios = require('../../models/servicios')

//funcion para obtener todos los servicios
const getServicios = async (req, res) => {
  try {
    const servicios = await Servicios.find()
    res.status(200).json({ servicios })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}
//funcion para crear un servicio
const crearServicio = async (req, res) => {
  try {
    const servicioExistente = await Servicios.findOne({
      servicio: req.body.servicio,
    })
    if (servicioExistente) {
      return res.status(400).json({ error: 'El servicio ya existe' })
    } else {
      const servicio = await Servicios.create(req.body)
      res.status(200).json({ servicio })
      return
    }
  } catch (error) {
    res.status(500).json({ error })
    return
  }
}

//funcion para editar un servicio
const editarServicio = async (req, res) => {
  try {
    const servicio = await Servicios.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json({ servicio })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para eliminar un servicio
const eliminarServicio = async (req, res) => {
  try {
    const servicio = await Servicios.findByIdAndDelete(req.params.id)
    if (!servicio) {
      return res.status(400).json({ error: 'El servicio no existe' })
    } else {
      res.status(200).json({ servicio })
      return
    }
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

module.exports = {
  getServicios,
  crearServicio,
  editarServicio,
  eliminarServicio,
}

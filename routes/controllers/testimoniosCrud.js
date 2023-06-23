const Testimonios = require('../../models/testimonios.js')

//funcion para obtener todos los testimonios
const getTestimonios = async (req, res) => {
  try {
    const testimonios = await Testimonios.find()
    return res.status(200).json({ testimonios })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

//funcion para crear un testimonio
const crearTestimonio = async (req, res) => {
  const { nombre, testimonio, sexo } = req.body
  try {
    const testimonioCreado = await Testimonios.create({
      nombre,
      testimonio,
      sexo,
    })
    res.status(200).json({ testimonio: testimonioCreado })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para editar testimonio
const editarTestimonio = async (req, res) => {
  const { id } = req.params
  const { nombre, testimonio, sexo } = req.body
  try {
    const testimonioActualizado = await Testimonios.findByIdAndUpdate(
      id,
      { nombre, testimonio, sexo },
      { new: true }
    )
    res.status(200).json({ testimonio: testimonioActualizado })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para eliminar testamento
const eliminarTestimonio = async (req, res) => {
  const { id } = req.params
  try {
    const testimonioEliminado = await Testimonios.findByIdAndDelete(id)
    res.status(200).json({ testimonio: testimonioEliminado })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

module.exports = {
  getTestimonios,
  crearTestimonio,
  editarTestimonio,
  eliminarTestimonio,
}

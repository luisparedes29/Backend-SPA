const Promociones = require('../../models/promociones')

//Controlador para obtener todas las promociones
const getPromociones = async (req, res) => {
  try {
    const promociones = await Promociones.find()
    return res.status(200).json({ promociones })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

//Controlador para crear promocion
const crearPromocion = async (req, res) => {
  const { servicio, descuento, codigoDescuento } = req.body
  try {
    const promocionCreada = await Promociones.create({
      servicio,
      descuento,
      codigoDescuento,
    })
    res.status(200).json({ promocion: promocionCreada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para editar promocion
const editarPromocion = async (req, res) => {
  const { id } = req.params
  const { servicio, descuento, codigoDescuento } = req.body
  try {
    const promocionActualizada = await Promociones.findByIdAndUpdate(
      id,
      { servicio, descuento, codigoDescuento },
      { new: true }
    )
    res.status(200).json({ promocion: promocionActualizada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para eliminar una promocion
const eliminarPromocion = async (req, res) => {
  const { id } = req.params
  try {
    const promocionEliminada = await Promociones.findByIdAndDelete(id)
    res.status(200).json({ promocion: promocionEliminada })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

module.exports = {
  getPromociones,
  crearPromocion,
  editarPromocion,
  eliminarPromocion,
}

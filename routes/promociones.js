const express = require('express')
const router = express.Router()
const {
  crearPromocion,
  getPromociones,
  editarPromocion,
  eliminarPromocion,
} = require('./controllers/promocionesCrud.js')

/* rutas de promociones. */
router
  .get('/', getPromociones)
  .post('/nuevo', crearPromocion)
  .put('/editar/:id', editarPromocion)
  .delete('/eliminar/:id', eliminarPromocion)

module.exports = router

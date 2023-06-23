const express = require('express')
const router = express.Router()
const verifyToken = require('./validacion-token')

const {
  crearPromocion,
  getPromociones,
  editarPromocion,
  eliminarPromocion,
} = require('./controllers/promocionesCrud.js')

/* rutas de promociones. */
router
  .get('/', getPromociones)
  .post('/nuevo', verifyToken, crearPromocion)
  .put('/editar/:id', verifyToken, editarPromocion)
  .delete('/eliminar/:id', verifyToken, eliminarPromocion)

module.exports = router

const express = require('express')
const router = express.Router()
const verifyToken = require('./validacion-token')

const {
  getReservaciones,
  crearReservacion,
  editarReservacion,
  eliminarReservacion,
} = require('./controllers/reservacionesCrud.js')

/* rutas de promociones. */
router
  .get('/', getReservaciones)
  .post('/nuevo', verifyToken, crearReservacion)
  .put('/editar/:id', verifyToken, editarReservacion)
  .delete('/eliminar/:id', verifyToken, eliminarReservacion)

module.exports = router

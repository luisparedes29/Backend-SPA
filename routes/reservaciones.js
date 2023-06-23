const express = require('express')
const router = express.Router()
const {
  getReservaciones,
  crearReservacion,
  editarReservacion,
  eliminarReservacion,
} = require('./controllers/reservacionesCrud.js')

/* rutas de promociones. */
router
  .get('/', getReservaciones)
  .post('/nuevo', crearReservacion)
  .put('/editar/:id', editarReservacion)
  .delete('/eliminar/:id', eliminarReservacion)

module.exports = router

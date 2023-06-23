const express = require('express')
const router = express.Router()
const verifyToken = require('./validacion-token')
const {
  getServicios,
  crearServicio,
  editarServicio,
  eliminarServicio,
} = require('./controllers/serviciosCrud.js')

/* rutas de servicios. */
router
  .get('/', getServicios)
  .post('/nuevo', verifyToken, crearServicio)
  .put('/editar/:id', verifyToken, editarServicio)
  .delete('/eliminar/:id', verifyToken, eliminarServicio)

module.exports = router

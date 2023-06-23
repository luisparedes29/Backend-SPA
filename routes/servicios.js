const express = require('express')
const router = express.Router()
const {
  getServicios,
  crearServicio,
  editarServicio,
  eliminarServicio,
} = require('./controllers/serviciosCrud.js')

/* rutas de servicios. */
router
  .get('/', getServicios)
  .post('/nuevo', crearServicio)
  .put('/editar/:id', editarServicio)
  .delete('/eliminar/:id', eliminarServicio)

module.exports = router

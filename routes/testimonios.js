const express = require('express')
const router = express.Router()
const verifyToken = require('./validacion-token')

const {
  getTestimonios,
  crearTestimonio,
  editarTestimonio,
  eliminarTestimonio,
} = require('./controllers/testimoniosCrud')

router
  .get('/', getTestimonios)
  .post('/nuevo', crearTestimonio)
  .put('/editar/:id', verifyToken, editarTestimonio)
  .delete('/eliminar/:id', verifyToken, eliminarTestimonio)

module.exports = router

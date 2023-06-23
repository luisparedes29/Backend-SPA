const express = require('express')
const router = express.Router()
const verifyToken = require('./validacion-token')

const {
  getUsuarios,
  editarUsuario,
  crearUsuario,
  eliminarUsuario,
} = require('./controllers/usuariosCrud.js')

/* Rutas de Usuarios */
router
  .get('/', getUsuarios)
  .get('/:id')
  .post('/nuevo', crearUsuario)
  .put('/editar/:id', editarUsuario)
  .delete('/eliminar/:id', eliminarUsuario)

module.exports = router

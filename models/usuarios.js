const mongoose = require('mongoose')

const UsuariosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    usuario: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Usuarios', UsuariosSchema)

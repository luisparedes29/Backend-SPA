const mongoose = require('mongoose')

const ServiciosSchema = new mongoose.Schema(
  {
    servicio: {
      type: String,
    },
    precio: {
      type: String,
    },
    duracion: {
      type: String,
    },
    descripcion: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Servicios', ServiciosSchema)

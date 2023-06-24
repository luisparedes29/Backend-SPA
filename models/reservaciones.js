const mongoose = require('mongoose')

const ReservacionesSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    correo: {
      type: String,
    },
    cedula: {
      type: String,
    },
    servicio: {
      type: String,
    },
    personas: {
      type: Number,
    },
    codigoDescuento: {
      type: String,
    },
    fecha: {
      type: String,
    },
    hora: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Reservaciones', ReservacionesSchema)

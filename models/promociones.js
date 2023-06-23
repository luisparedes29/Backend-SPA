const mongoose = require('mongoose')

const PromocionesSchema = new mongoose.Schema(
  {
    servicio: {
      type: String,
    },
    descuento: {
      type: String,
    },
    codigoDescuento: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Promociones', PromocionesSchema)

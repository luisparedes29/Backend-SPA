const mongoose = require('mongoose')

const TestimoniosSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    testimonio: {
      type: String,
    },
    sexo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Testimonios', TestimoniosSchema)

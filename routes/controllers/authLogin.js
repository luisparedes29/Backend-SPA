const Usuarios = require('../../models/usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
  try {
    const usuario = await Usuarios.findOne({ usuario: req.body.usuario })
    if (!usuario) {
      return res.status(400).json({ error: 'El usuario no existe' })
    }
    const validPassword = await bcrypt.compare(
      req.body.contraseña,
      usuario.password
    )
    if (!validPassword) {
      return res.status(400).json({ error: 'Contraseña no válida' })
    }

    const token = jwt.sign(
      {
        usuario: usuario.usuario,
        id: usuario.id,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: '1d' } // Define el tiempo de expiración en 1 hora (puedes ajustarlo según tus necesidades)
    )

    res.header('Authorization', token).json({ token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Ocurrió un error en el servidor' })
  }
}

// Función de Logout
const logout = (req, res) => {
  res.clearCookie('token')
  res.json({ ok: true })
}

module.exports = login

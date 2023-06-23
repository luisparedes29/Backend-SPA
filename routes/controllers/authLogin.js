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
      process.env.TOKEN_SECRET
    )
    // res.status(200).json({ ok: true, mensaje: 'Usuario loggeado' })
    res.header('Authorizacion', token).json({
      error: null,
      data: { token },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Ocurrió un error en el servidor' })
  }
}
module.exports = login

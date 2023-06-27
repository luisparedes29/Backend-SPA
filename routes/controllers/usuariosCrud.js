const Usuarios = require('../../models/usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//funcion para crear usuario validando si ya existe
const crearUsuario = async (req, res) => {
  const { usuario, nombre, contraseña } = req.body
  try {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(contraseña, salt)
    const usuarioExistente = await Usuarios.findOne({
      usuario: req.body.usuario,
    })
    if (usuarioExistente) {
      res.status(400).json({ error: 'El usuario ya existe' })
      return
    }
    const usuarioCreado = await Usuarios.create({
      usuario,
      nombre,
      password,
    })
    res.status(200).json({ usuario: usuarioCreado })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.find()
    res.status(200).json({ usuarios })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para editar un usuario tambien con la validacion si ya existe el nuevo nombre
const editarUsuario = async (req, res) => {
  try {
    const { usuario, nombre, contraseña } = req.body

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(contraseña, salt)

    const usuarioExistente = await Usuarios.findOne({
      usuario: req.body.usuario,
    })

    if (usuarioExistente?.id == req.params.id || usuarioExistente) {
      res.status(400).json({ error: 'El usuario ya existe' })
      return
    }

    const usuarioObjeto = {
      usuario,
      nombre,
      password,
    }

    const usuarioActualizado = await Usuarios.findByIdAndUpdate(
      req.params.id,
      usuarioObjeto,
      { new: true }
    )
    if (!usuarioActualizado) {
      res.status(400).json({ error: 'El usuario no existe' })
      return
    }

    res.status(200).json({ usuario: usuarioActualizado })
    return
  } catch (error) {
    res.status(400).json({ error })
    return
  }
}

//funcion para eliminar usuario
const eliminarUsuario = async (req, res) => {
  try {
    const usuarioEliminado = await Usuarios.findByIdAndDelete(req.params.id)
    if (!usuarioEliminado) {
      res.status(400).json({ error: 'El usuario no existe' })
      return
    }
    res.status(200).json({ usuario: usuarioEliminado })
    return
  } catch (error) {
    res.status(500).json({ error })
    return
  }
}

module.exports = {
  crearUsuario,
  getUsuarios,
  editarUsuario,
  eliminarUsuario,
}

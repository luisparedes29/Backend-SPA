const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config()

const conexionDB = require('./conexionDB')

conexionDB()

const serviciosRouter = require('./routes/servicios')
const usuariosRouter = require('./routes/users')
const promocionesRouter = require('./routes/promociones')
const reservacionesRouter = require('./routes/reservaciones')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/servicios', serviciosRouter)
app.use('/usuarios', usuariosRouter)
app.use('/promociones', promocionesRouter)
app.use('/reservaciones', reservacionesRouter)

module.exports = app

const express = require('express')
const config = require('./config')
const indexRouter = require('./routes/index')

const app = express()

app.locals = {
	...app.locals,
	config,
}

app.use(express.json())
app.disable('x-powered-by')

app.use('/', indexRouter)

module.exports = app

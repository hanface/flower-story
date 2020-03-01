const path = require('path')
const express = require('express')

const server = express()
const flowerApi = require('./routes/flowers')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/v1/flowers', flowerApi)

module.exports = server

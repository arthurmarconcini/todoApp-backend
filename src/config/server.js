const port = 3003
const express = require('express')

const server = express()
const allowCors = require('./cors')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(allowCors)

server.listen(port, function () {
  console.log(`Backend is running on port https://localhost:${port}/`)
})

module.exports = server

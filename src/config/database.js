const mongoose = require('mongoose')
mongoose.Promise = global.Promise
require('dotenv').config()
const express = require('express')

const server = express()

mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    server.emit('pronto')
  })
  .catch(e => console.log(e))

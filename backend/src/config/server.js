const port = 3003

const express = require('express')
const server = express()
const cors = require('cors')


server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
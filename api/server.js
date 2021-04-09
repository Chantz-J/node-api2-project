// implement your server here
// require your posts router and connect it here

const express = require('express')
const server = express()
const postRoutes = require('./posts/posts-router')

server.use(express.json())
server.use('/api/posts', postRoutes)

server.get('/', (req, res) => {
    res.send('<h1>Hello from Express ^_^<h1>')
})


module.exports = server 
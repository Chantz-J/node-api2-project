// implement your server here
// require your posts router and connect it here

const express = require('express')
const server = express()

const postRoutes = require('./posts/posts-router')

server.use(express.json())
server.use('/post', postRoutes)

server.get('/', (req, res) => {
    res.send('Hello from Express ^_^')
})


module.exports = server 
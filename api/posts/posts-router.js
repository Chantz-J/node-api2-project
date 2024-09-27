// implement your posts router here
const express = require('express')
const Posts = require('./posts-model')
const router = express.Router()

//[GET]
router.get('/', (req, res) => {
    // res.status(200).send('Hello from the /GET /posts endpoint')
    Posts.find(req.query)
    .then(post => {
        console.log(post)
        res.status(200).json(post)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({
            message: "Error retrieving posts"
        })
    })
})
//api/posts/
router.get('/:id', (req, res) => {
    Posts.findById(req.params.id)
    .then(post => {
        if (post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message: 'Post not found'})
        }
    })
})

router.get('/api/posts/:id/comments', (req, res) => {
    res.status(200).send('Hello from the /GET /posts (by id for comments) endpoint')
})

//[POST]
router.post('/api/posts', (req, res) => {
    res.status(200).send('hello from the POST /posts endpoint');
})

//[PUT]
router.put('/api/posts/:id', (req, res) => {
    res.status(200).send('hello from the POST /posts endpoint');
})
//[DELETE]
router.delete('/api/posts/:id', (req, res) => {
    res.status(204).send('hello from the POST /posts endpoint');
})




module.exports = router
const express = require('express');
const router = express.Router()
const createPost = require('../controllers/createBlogs')
const allBlogs = require('../controllers/findBlogs')
const addComment = require('../controllers/addComments')


router.post('/create-blog/',createPost)
router.get('/get-blogs/',allBlogs)
router.put('/add-comments/:id/comment',addComment)

module.exports = router;

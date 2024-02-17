const express = require('express');
const router = express.Router()

// Import Routes

const {createPost,findAllPost} = require('../controllers/postController')
const addComment = require('../controllers/addComment')
const {addLike,removeLike} = require('../controllers/likeUnlike')

router.post('/create-post',createPost);
router.post('/add-comment',addComment);
router.post('/like-post',addLike);
router.post('/unlike-post',removeLike);
router.get('/get-all-posts',findAllPost);





module.exports = router;

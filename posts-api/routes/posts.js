const express = require('express');

const controller = require('../controllers/posts');

const router = express.Router();

router.get('/', controller.getPosts);

router.post('/', controller.createPost);

router.get('/:id', controller.getPost);

router.delete('/:id', controller.deletePost);

module.exports = router;
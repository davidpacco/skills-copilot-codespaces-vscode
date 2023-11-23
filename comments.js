// Create web server

// Import dependencies
const express = require('express');
const router = express.Router();

// Import controllers
const { create, list, read, update, remove } = require('../controllers/comment');

// Import validators
const { runValidation } = require('../validators');
const { createCommentValidator } = require('../validators/comment');
const { requireSignin } = require('../controllers/auth');

// Routes
router.post('/comment', createCommentValidator, runValidation, requireSignin, create);
router.get('/comments', list);
router.get('/comment/:slug', read);
router.put('/comment/:slug', update);
router.delete('/comment/:slug', remove);

// Export module
module.exports = router;
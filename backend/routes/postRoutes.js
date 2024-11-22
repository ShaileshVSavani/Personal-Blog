const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Create Post
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get All Posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get Single Post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Post
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete Post
// router.delete('/:id', async (req, res) => {
//   try {
//     await Post.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Post deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


router.delete('/api/posts/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post', error });
  }
});

module.exports = router;

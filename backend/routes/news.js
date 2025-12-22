// routes/news.js
const express = require('express');
const router = express.Router();
const News = require('../models/News');

// GET all news
router.get('/', async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single news
router.get('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE new news
router.post('/', async (req, res) => {
    const news = new News({
        title: req.body.title,
        body: req.body.body,
        author_id: req.body.author_id,
        comments: []
    });

    try {
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE news
router.patch('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }

        if (req.body.title) news.title = req.body.title;
        if (req.body.body) news.body = req.body.body;
        if (req.body.comments) news.comments = req.body.comments;

        const updatedNews = await news.save();
        res.json(updatedNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE news
router.delete('/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: 'News not found' });
        }
        await news.deleteOne();
        res.json({ message: 'News deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
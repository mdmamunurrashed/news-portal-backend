// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000
})
.then(() => console.log('✅ MongoDB Connected Successfully'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// Import Routes
const userRoutes = require('./routes/users');
const newsRoutes = require('./routes/news');

// Use Routes
app.use('/users', userRoutes);
app.use('/news', newsRoutes);

// Root Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to News Portal API' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
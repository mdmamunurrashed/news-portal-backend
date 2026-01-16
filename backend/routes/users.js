// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyToken } = require('../middleware/auth');

// REGISTER new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const user = new User({
            name,
            email,
            password
        });

        const newUser = await user.save();
        const token = newUser.generateToken();

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            },
            token
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// LOGIN user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = user.generateToken();

        res.json({
            message: 'Login successful',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single user
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// CREATE new user (for backward compatibility - use register endpoint instead)
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const user = new User({
            name,
            email,
            password
        });

        const newUser = await user.save();
        res.status(201).json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE user (Protected route)
router.patch('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify user can only update their own profile or allow admin
        if (req.user.id !== req.params.id) {
            return res.status(403).json({ message: 'You can only update your own profile' });
        }

        if (req.body.name) user.name = req.body.name;
        if (req.body.email) user.email = req.body.email;
        if (req.body.password) user.password = req.body.password;

        const updatedUser = await user.save();
        res.json({
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE user (Protected route)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify user can only delete their own profile
        if (req.user.id !== req.params.id) {
            return res.status(403).json({ message: 'You can only delete your own profile' });
        }

        await user.deleteOne();
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
// middleware/auth.js
const jwt = require('jsonwebtoken');

// Verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided, access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'jwt_secret_key');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = { verifyToken };

// seed.js - Run this once to add initial data to MongoDB
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const News = require('./models/News');

mongoose.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

const seedData = async () => {
    try {
        // Clear existing data
        await User.deleteMany({});
        await News.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Create users
        const users = await User.insertMany([
            { name: 'Alice Rahman', email: 'alice@example.com' },
            { name: 'Karim Hossain', email: 'karim@example.com' },
            { name: 'Nusrat Jahan', email: 'nusrat@example.com' }
        ]);
        console.log('✅ Users created:', users.length);

        // Create news with comments
        const news1 = new News({
            title: 'Govt Announces New Tech Park',
            body: 'A new state-of-the-art tech park will be established in Dhaka to boost the IT sector...',
            author_id: users[0]._id,
            comments: [
                {
                    text: 'Great initiative!',
                    user_id: users[1]._id,
                    timestamp: new Date('2025-12-04T10:30:00Z')
                },
                {
                    text: 'Hope this brings more jobs.',
                    user_id: users[2]._id,
                    timestamp: new Date('2025-12-04T11:00:00Z')
                }
            ]
        });

        const news2 = new News({
            title: 'Local Startup Wins Innovation Award',
            body: 'A Dhaka-based startup has won an international innovation award for AI-driven solutions...',
            author_id: users[1]._id,
            comments: []
        });

        const news3 = new News({
            title: '7.0M earthquake just hit USA',
            body: 'Alaska, USA just hit by a 7.0M earthquake, but none got injured as per the report.',
            author_id: users[2]._id,
            comments: []
        });

        await news1.save();
        await news2.save();
        await news3.save();
        console.log('✅ News created: 3');

        console.log('🎉 Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedData();
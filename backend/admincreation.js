const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as necessary
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log('Connected to MongoDB');

        const admin = new User({
            name: 'Misna',
            email: 'misnoos1723@gmail.com',
            password: '123', // Use plain password, let the middleware handle hashing
            isAdmin: true
        });

        await admin.save();
        console.log('Admin user created');

        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
        mongoose.disconnect();
    });

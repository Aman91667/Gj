import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import route from './routes/userRoute.js';

// Initialize dotenv
dotenv.config();

// Initialize express app
const app = express();
app.use(express.static('public'));

// CORS middleware
app.use(cors({
    origin: 'http://localhost:3000', // Your React app URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Body parser middleware
app.use(bodyParser.json());

// Define routes
app.use('/api', route);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL)
    .then(() => {
        console.log('DB is connected');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => console.log('Database connection error:', error));

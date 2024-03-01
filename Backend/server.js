// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';
import petRoutes from './routes/petsRoutes.js';
import petSitterRoutes from './routes/petSitterRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', usersRoutes);
app.use('/api', petRoutes);
app.use('/api', petSitterRoutes);
app.use('/api', adminRoutes);

// Connexion bd
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('MongoDB connected successfully');
    
    app.listen(PORT, () => {
        console.log(`Server connected at http://10.1.5.32:${PORT}`);
    });
});

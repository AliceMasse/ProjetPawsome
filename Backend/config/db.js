
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(mongoUrl, 
    { useNewUrlParser: true,
         useUnifiedTopology: true,
         
        
        });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

export default db;

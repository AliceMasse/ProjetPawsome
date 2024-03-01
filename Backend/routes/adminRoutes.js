
import express from 'express';
const router = express.Router();
import Admin from '../models/adminModel.js';  

// tous les admins
router.get('/admins', async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//  créer un nouvel admin
router.post('/admins', async (req, res) => {
    const { Username, Password, Email } = req.body;

    try {
        const newAdmin = await Admin.create({ Username, Password, Email });
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



export default router;

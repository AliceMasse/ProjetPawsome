
import express from 'express';
const router = express.Router();
import PetSitter from '../models/petSitterModel.js';




//tous les PetSitters
router.get('/petSitters', async (req, res) => {
    try {
        const petSitters = await PetSitter.find();
        res.json(petSitters);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// créer un nouveau PetSitter
router.post('/petSitters', async (req, res) => {
    const { Availability, AdditionalInfo, UserID } = req.body;

    try {
        const newPetSitter = await PetSitter.create({ Availability, AdditionalInfo, UserID });
        res.status(201).json(newPetSitter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//  modifier
import mongoose from 'mongoose';



router.put('/petSitters/:id', async (req, res) => {
    const { Availability, AdditionalInfo, UserID } = req.body;
    const petSitterId = req.params.id;


    if (!mongoose.Types.ObjectId.isValid(petSitterId)) {
        return res.status(400).json({ message: 'Invalid PetSitter ID' });
    }

    try {
        const updatedPetSitter = await PetSitter.findByIdAndUpdate(
            petSitterId,
            { Availability, AdditionalInfo, UserID },
            { new: true }
        );

        if (!updatedPetSitter) {
            return res.status(404).json({ message: 'PetSitter not found' });
        }

        res.json(updatedPetSitter);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});




// supprimer 
router.delete('/petSitters/:id', async (req, res) => {
    try {
        await PetSitter.findByIdAndDelete(req.params.id);
        res.json({ message: 'PetSitter deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;

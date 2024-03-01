
import express from 'express';
const router = express.Router();
import Pet from '../models/petModel.js';  

// Route pour obtenir tous les pets
router.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//  créer 
router.post('/pets', async (req, res) => {
    const { name, age, gender, breed, weight, race, UserID, image } = req.body;

    try {
        const newPet = await Pet.create({ name, age, gender, breed, weight, race, UserID, image });
        res.status(201).json(newPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//  modifier 
router.put('/pets/:petId', async (req, res) => {
    const { petId } = req.params;
    const { name, age, gender, breed, weight, race, UserID, image } = req.body;

    try {
        const updatedPet = await Pet.findByIdAndUpdate(
            petId,
            { name, age, gender, breed, weight, race, UserID, image },
            { new: true }  // Retourne le document modifié
        );

        if (!updatedPet) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        res.json(updatedPet);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//  supprimer 
router.delete('/pets/:petId', async (req, res) => {
    const { petId } = req.params;

    try {
        const deletedPet = await Pet.findByIdAndDelete(petId);

        if (!deletedPet) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        res.json({ message: 'Pet deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



export default router;

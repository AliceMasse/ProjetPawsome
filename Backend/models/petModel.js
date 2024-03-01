// petModel.js
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const petSchema = new Schema({
    petId: Number,
    name: String,
    age: Number,
    gender: String,
    breed: String,
    weight: Number,
    race: String,
    image: String,  
    UserID: { type: String,  required: true },
});

const Pet = model("Pet", petSchema);

export default Pet;

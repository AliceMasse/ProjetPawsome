
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const petSitterSchema = new Schema({
    ID_sitter: Number,
    Availability: String,
    AdditionalInfo: String,
    UserID: { type: Number, ref: 'userModel' },  
});

const PetSitter = model("PetSitter", petSitterSchema);

export default PetSitter;



import mongoose from "mongoose";
const { Schema, model } = mongoose;

const adminSchema = new Schema({
    AdminID: { type: Number, autoIncrement: true },
    Username: String,
    Password: String,
    Email: String,
});

const Admin = model("Admin", adminSchema);

export default Admin;


import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  PhoneNumber: { type: String },
  Role: { type: String },
  verificationCode: { type: String },  
  isEmailVerified: { type: Boolean, default: false }, 
});

const User = mongoose.model('User', userSchema);

export default User;


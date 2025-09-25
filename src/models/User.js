const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }, // demo only (plain); replace with hash for prod
    role: { type: String, enum: ['PROFESSOR', 'STUDENT'], required: true },
    fullName: { type: String, required: true },
    // Optional: for STUDENTs, store their enrollment/roll number
    enrollmentNumber: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);

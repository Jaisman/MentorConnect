// models/user.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  role: { type: String, 
    enum: ['student', 'mentor'],
    default: 'student',
     required: true
     },

  // Common fields
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  passwordHash: String,
  bio: String,

  linkedIn: String,

  // Mentor-specific fields
  yearsOfExperience: { type: Number },
  expertise: [String],
  companiesWorked: [
    {
      name: String,
      role: String,
      description: String,
    },
  ],
  hourlyRate: Number,
  availability: [
    {
      day: { type: String, enum: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"] },
      start: String, // e.g. "09:00"
      end: String,   // e.g. "17:00"
      timezone: String,
    },
  ],
  verified: { type: Boolean, default: false },
  reputation: { type: Number, default: 0 },

  // Student-specific fields
  targets: [{ company: String, role: String }],
  skills: [String],

}, { timestamps: true });

// Index for search
UserSchema.index({ fullName: 'text', bio: 'text', skills: 'text', expertise: 'text' });

const user = mongoose.model('user', UserSchema);
export default user;

// models/Feedback.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const FeedbackSchema = new Schema({
    fromUser: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // who gave feedback
    toUser: { type: Schema.Types.ObjectId, ref: 'User', required: true },   // who received feedback
    rating: { type: Number, min: 1, max: 5, required: true },             // rating out of 5
    comment: { type: String },                                             // optional comment
}, { timestamps: true });

// Optional: index to quickly get feedback for a user
FeedbackSchema.index({ toUser: 1 });

module.exports = mongoose.model('Feedback', FeedbackSchema);

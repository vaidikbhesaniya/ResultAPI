const mongoose = require('mongoose');

const MarkSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    marks: { type: Number, min: 0, max: 100, required: true },
    grade: { type: String, required: true },
    dateEntered: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

MarkSchema.index({ studentId: 1, subjectId: 1 }, { unique: true });

module.exports = mongoose.model('Mark', MarkSchema);

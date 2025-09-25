const mongoose = require('mongoose');

const EnrollmentSchema = new mongoose.Schema(
  {
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true }
  },
  { timestamps: true }
);

EnrollmentSchema.index({ studentId: 1, subjectId: 1 }, { unique: true });

module.exports = mongoose.model('Enrollment', EnrollmentSchema);

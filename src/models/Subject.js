const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
  {
    subjectCode: { type: String, unique: true, required: true },
    subjectName: { type: String, required: true },
    professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Subject', SubjectSchema);

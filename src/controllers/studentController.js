const Enrollment = require('../models/Enrollment');
const Subject = require('../models/Subject');
const Mark = require('../models/Mark');

exports.getSubjectsByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const enrollments = await Enrollment.find({ studentId }).lean();
    const subjectIds = enrollments.map(e => e.subjectId);
    const subjects = await Subject.find({ _id: { $in: subjectIds } });
    res.json(subjects.map(s => ({ subjectId: s._id, subjectCode: s.subjectCode, subjectName: s.subjectName })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getMarksByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    const marks = await Mark.find({ studentId }).lean();
    res.json(marks.map(m => ({ subjectId: m.subjectId, marks: m.marks, grade: m.grade, dateEntered: m.dateEntered })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const Mark = require('../models/Mark');

function calcResult(marks) {
  return marks < 8 ? 'Fail' : 'Pass';
}

exports.saveMark = async (req, res) => {
  try {
    const { studentId, subjectId, marks } = req.body;
    if (studentId == null || subjectId == null || marks == null) {
      return res.status(400).json({ message: 'studentId, subjectId, marks required' });
    }
    if (marks < 0 || marks > 20) {
      return res.status(400).json({ message: 'Marks must be between 0 and 20' });
    }
    const grade = calcResult(marks);

    const existing = await Mark.findOne({ studentId, subjectId });
    if (existing) {
      existing.marks = marks;
      existing.grade = grade;
      existing.dateEntered = new Date();
      await existing.save();
      return res.json({ ok: true, grade: existing.grade, dateEntered: existing.dateEntered });
    }
    const created = await Mark.create({ studentId, subjectId, marks: marks, grade, dateEntered: new Date() });
    return res.json({ ok: true, grade: created.grade, dateEntered: created.dateEntered });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const Mark = require('../models/Mark');

function calcGrade(marks) {
  if (marks >= 90) return 'A+';
  if (marks >= 80) return 'A';
  if (marks >= 70) return 'B+';
  if (marks >= 60) return 'B';
  if (marks >= 50) return 'C';
  if (marks >= 40) return 'D';
  return 'F';
}

exports.saveMark = async (req, res) => {
  try {
    const { studentId, subjectId, marks } = req.body;
    if (studentId == null || subjectId == null || marks == null) {
      return res.status(400).json({ message: 'studentId, subjectId, marks required' });
    }
    const m = Math.min(100, Math.max(0, Number(marks)));
    const grade = calcGrade(m);

    const existing = await Mark.findOne({ studentId, subjectId });
    if (existing) {
      existing.marks = m;
      existing.grade = grade;
      existing.dateEntered = new Date();
      await existing.save();
      return res.json({ ok: true, grade: existing.grade, dateEntered: existing.dateEntered });
    }
    const created = await Mark.create({ studentId, subjectId, marks: m, grade, dateEntered: new Date() });
    return res.json({ ok: true, grade: created.grade, dateEntered: created.dateEntered });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

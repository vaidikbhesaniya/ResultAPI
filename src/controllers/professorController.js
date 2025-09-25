const Subject = require('../models/Subject');

exports.getSubjectsByProfessor = async (req, res) => {
  try {
    const { profId } = req.params;
    const subjects = await Subject.find({ professorId: profId }).limit(2);
    res.json(subjects.map(s => ({ subjectId: s._id, subjectCode: s.subjectCode, subjectName: s.subjectName })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

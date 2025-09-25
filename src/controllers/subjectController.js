const Enrollment = require('../models/Enrollment');
const User = require('../models/User');

exports.getStudentsBySubject = async (req, res) => {
  try {
    const { subjectId } = req.params;
    const enrollments = await Enrollment.find({ subjectId }).lean();
    const studentIds = enrollments.map(e => e.studentId);
    const students = await User.find({ _id: { $in: studentIds }, role: 'STUDENT' });
    res.json(students.map(u => ({ userId: u._id, username: u.username, fullName: u.fullName })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

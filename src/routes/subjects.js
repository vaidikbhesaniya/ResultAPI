const router = require('express').Router();
const { getStudentsBySubject } = require('../controllers/subjectController');

router.get('/:subjectId/students', getStudentsBySubject);

module.exports = router;

const router = require('express').Router();
const { getSubjectsByStudent, getMarksByStudent } = require('../controllers/studentController');

router.get('/:studentId/subjects', getSubjectsByStudent);
router.get('/:studentId/marks', getMarksByStudent);

module.exports = router;

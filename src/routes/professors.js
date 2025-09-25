const router = require('express').Router();
const { getSubjectsByProfessor } = require('../controllers/professorController');

router.get('/:profId/subjects', getSubjectsByProfessor);

module.exports = router;

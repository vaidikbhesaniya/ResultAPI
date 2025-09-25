const router = require('express').Router();
const { saveMark } = require('../controllers/marksController');

router.post('/', saveMark);

module.exports = router;

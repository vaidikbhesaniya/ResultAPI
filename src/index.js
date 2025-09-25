require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/db');

const authRoutes = require('./routes/auth');
const professorRoutes = require('./routes/professors');
const subjectRoutes = require('./routes/subjects');
const studentRoutes = require('./routes/students');
const marksRoutes = require('./routes/marks');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => res.send({ status: 'ok', service: 'Mid-Term Result API' }));

app.use('/api/auth', authRoutes);
app.use('/api/professors', professorRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/marks', marksRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

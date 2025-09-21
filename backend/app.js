const express = require('express');
const cors = require('cors');
const atsRoutes = require('./routes/atsRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/ats', atsRoutes);

module.exports = app;
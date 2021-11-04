'use strict';

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const capsRoutes = require('./capsRoutes');

app.use(capsRoutes);

app.listen(PORT, () => console.log(`Server is up on port ${PORT}`));

module.exports = { app }

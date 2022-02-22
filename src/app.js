const express = require('express');
const path = require('path');
const routerInputHandler = require('./routes/index');

const app = express();
const filePath = path.join(__dirname, '..', '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(filePath));
app.use(routerInputHandler);

module.exports = app;

const express = require('express');
const path = require('path');
const routerInputHandler = require('./routes/index');

const app = express();
const filePath = path.join(__dirname, '..', '..', 'public');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(filePath));
app.use(routerInputHandler);

// const app = require('./app');

const router = express.Router();
app.set('port', process.env.PORT || 4000);

router.get('/', (req, res) => {
  res.send('its working');
});

app.use('/', router);

module.exports = app;

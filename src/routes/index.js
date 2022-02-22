const express = require('express');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, '..', '..', 'public');

router.use(express.static(filePath));

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'home.html'));
});
router.post('/search', (req, res) => {
  // console.log(req.query['movie-name']);// git the data from the url
  console.log(req.body);
  res.send({ testback: 'test' });
});

module.exports = router;

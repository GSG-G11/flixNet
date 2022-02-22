const express = require('express');
const path = require('path');

const router = express.Router();

const filePath = path.join(__dirname, '..', '..', 'public');

router.use(express.static(filePath));

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'home.html'));
});
router.get('/search', (req, res) => {
  console.log(req.query['movie-name']);// git the data from the url
  res.send({ data: 'test' });
});

module.exports = router;

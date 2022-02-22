const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const router = express.Router();

const filePath = path.join(__dirname, '..', '..', 'public');

router.use(express.static(filePath));

router.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'home.html'));
});
router.post('/search', (req, res) => {
  console.log(req.body.inputValue);
  const moviename = req.body.inputValue;
  // first fetch to get the movie id
  fetch(`https://www.omdbapi.com/?apikey=8edd63b7&s=${moviename}`)
    .then((result) => result.json())
    .then((data) => {
      if (!data.Search) {
        throw new Error(data.Error);
      } else {
        const movieId = data.Search[0].imdbID;
        console.log(movieId);
        //  secoung fetch to get the data from another api using the  id which we get thrrough
        // the first api
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=ca43d42a77d5f7641cca48352f415f5b`)
          .then((result) => result.json())
          .then((moviedata) => res.send({ data: moviedata })); // to send the data to front
      }
    })
    .catch((error) => {
      res.status(404).send({ error: error.message });
    });
});

module.exports = router;

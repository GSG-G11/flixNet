// const { options } = require("../../src/routes");

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const heroSection = document.querySelector('.hero-section');
const loader = document.querySelector('.lds-spinner');

searchBtn.addEventListener('click', () => {
  const movieDescription = document.querySelector('.movie-decription');
  movieDescription.remove();
  loader.style.display = 'inline-block';
  const inputValue = searchInput.value;
  const data = { inputValue };
  const details = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch('/search', details)
    .then((res) => res.json())
    .then((res) => {
      loader.style.display = 'none';
      const {
        original_title: title,
        overview: overview,
        poster_path: moviePoster,
      } = res.data;
      const movieDescriptionSection = document.createElement('div');
      const movieTitle = document.createElement('p');
      const movieOverview = document.createElement('p');

      movieDescriptionSection.classList.add('movie-decription');
      movieTitle.classList.add('movie-title');
      movieOverview.classList.add('movie-overview');

      movieTitle.innerText = title;
      movieOverview.innerText = overview;

      movieDescriptionSection.appendChild(movieTitle);
      movieDescriptionSection.appendChild(movieOverview);
      heroSection.appendChild(movieDescriptionSection);
      heroSection.style.backgroundImage = `linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 37.27%), url("https://image.tmdb.org/t/p/w500${moviePoster}")`;
    });
});
// you can access the input value from >>data.inputValue>>

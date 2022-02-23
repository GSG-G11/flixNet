// const { options } = require("../../src/routes");

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const heroSection = document.querySelector('.hero-section');
const loader = document.querySelector('.lds-spinner');

const getCards = (category) => {
  const cardsDetails = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category: `${category}` }),
  };
  fetch('/cards', cardsDetails)
    .then((response) => response.json())
    .then((data) => {
      console.log('date sheuld be below ....');
      console.log(data.results);
      console.log(' after the data ........');
    });
};
getCards('top_rated');
getCards('popular');
getCards('upcoming');

searchBtn.addEventListener('click', () => {
  const movieDescription = document.querySelector('.movie-decription');
  movieDescription && movieDescription.remove();
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
      if (res.error) {
        heroSection.innerHTML = '';
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.innerText = `Try Again , ${res.error}`;
        heroSection.style.backgroundImage = 'none';
        heroSection.appendChild(errorMessage);
      } else {
        heroSection.innerHTML = '';
        heroSection.style.backgroundImage = 'none';
        const {
          original_title: title,
          overview,
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
      }
    });
});
// you can access the input value from >>data.inputValue>>

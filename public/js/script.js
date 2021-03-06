// const { options } = require("../../src/routes");

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const heroSection = document.querySelector('.hero-section');
const cardsSectionsContainer = document.querySelector('.first-fetch-result');

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
    .then((data) => data.results)
    .then((data) => {
      const resultChildTitle = document.createElement('h2');
      resultChildTitle.classList = 'section-title';
      resultChildTitle.id = category;
      resultChildTitle.innerText = category.replace('_', ' ');
      cardsSectionsContainer.appendChild(resultChildTitle);

      const resultChild = document.createElement('div');
      resultChild.classList = 'first-fetch-result-child';

      data.forEach((ele) => {
        const { poster_path, title, vote_average } = ele;

        const card = document.createElement('div');
        card.classList = 'card';

        const image = document.createElement('img');

        const rate = document.createElement('h4');
        rate.classList = 'rate';

        const titleSec = document.createElement('h3');
        titleSec.classList = 'title';

        image.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
        card.appendChild(image);
        rate.innerText = `${vote_average}/10`;
        card.appendChild(rate);
        titleSec.innerText = title;
        card.appendChild(titleSec);
        resultChild.append(card);
        cardsSectionsContainer.appendChild(resultChild);
      });
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

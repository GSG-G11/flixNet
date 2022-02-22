// const { options } = require("../../src/routes");

const searchBtn = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', () => {
  const inputValue = searchInput.value;
  const data = { inputValue };
  const details = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  fetch('/search', details);
});
// you can access the input value from >>data.inputValue>>

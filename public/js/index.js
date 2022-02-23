document.querySelector('.form_login')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.assign('/home');
  });

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  document.getElementById('lastModified').textContent =
    'Last Modified: ' + document.lastModified;
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav ul');

  hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');

    if (hamburger.textContent.trim() === '☰') {
      hamburger.textContent = 'X';
    } else {
      hamburger.textContent = '☰';
    }
  });
});

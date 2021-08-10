// Mobile Nav Functionality
const planetLinks = document.getElementById('planet-links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
  planetLinks.classList.toggle('show-content');
  hamburger.classList.toggle('dim');
});

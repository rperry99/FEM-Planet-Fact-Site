// Mobile Nav Functionality
const planetLinks = document.getElementById('planet-links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function () {
  planetLinks.classList.toggle('show-content');
  hamburger.classList.toggle('dim');
});

// Hover effects for the desktop nav.
if (window.innerWidth >= 1023) {
  $('.planet-link .name p').hover(function (e) {
    $(this)
      .closest('.planet-link')
      .toggleClass(`${this.innerHTML.toLowerCase()}`, e.type == 'mouseenter');
  });
}

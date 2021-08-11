// Mobile Nav Functionality
$('#hamburger').click(function () {
  $('#planet-links').toggleClass('show-content').removeClass('start-state');
  $('#hamburger').toggleClass('dim');
});

// Hover effects for the desktop nav.
if (window.innerWidth >= 1023) {
  $('.planet-link .name p').hover(function (e) {
    $(this)
      .closest('.planet-link')
      .toggleClass(`${this.innerHTML.toLowerCase()}`, e.type == 'mouseenter');
  });
}

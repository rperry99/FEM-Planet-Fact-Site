// Mobile Nav Functionality
$('#hamburger').click(function () {
  $('#planet-links').toggleClass('show-content').removeClass('start-state');
  $('#hamburger').toggleClass('dim');
});

// Remove the start state class if the page is too large.
if (window.innerWidth >= 767) {
  $('#planet-links').removeClass('start-state');
}

// Hover effects for the desktop nav.
if (window.innerWidth >= 1023) {
  $('.planet-link .name p').hover(function (e) {
    $(this)
      .closest('.planet-link')
      .toggleClass(`${this.innerHTML.toLowerCase()}`, e.type == 'mouseenter');
  });
}

// Changing the color based on planet
// $('.content-tabs ul li.active').css('border-bottom-color', 'green');

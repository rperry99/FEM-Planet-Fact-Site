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

// Changing Planets
const planetsJSON = (function () {
  var json = null;
  $.ajax({
    async: false,
    global: false,
    url: './planets.json',
    dataType: 'json',
    success: function (data) {
      json = data;
    },
  });
  return json;
})();

function changePlanet(planet) {
  for (var key in planetsJSON) {
    if (planetsJSON[key].name == planet) {
      if (window.innerWidth < 767) {
        // Hide the nav on mobile when you click on a planet.
        $('#planet-links').toggleClass('show-content');
        $('#hamburger').toggleClass('dim');
      }

      // Change the title of the page
      document.title = `Frontend Mentor | ${planet}`;

      // Change the image when switching planets
      $('#planet-image img')
        .attr('src', `${planetsJSON[key].images.planet}`)
        .removeClass()
        .addClass(`${planet.toLowerCase()}`);

      // Change content tab color when switching planets
      $('#content-tabs')
        .removeClass()
        .addClass(`content-tabs ${planet.toLowerCase()}`);

      // Change content when switching planets
      $('#planet-name').text(`${planetsJSON[key].name}`);
    }
  }
}

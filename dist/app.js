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
let currentPlanet = 'Mercury';
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

      // Force the overview to be selected when changing planets and hide the overlay
      $('#overview').prop('checked', true);
      removeSurfaceOverlay();

      // Set the currentPlanet variable to be the current planet.
      currentPlanet = planet;

      // Change the title of the page
      document.title = `Frontend Mentor | ${planet}`;

      // Change the image when switching planets
      $('#planet-image #planet')
        .attr('src', `${planetsJSON[key].images.planet}`)
        .removeClass()
        .addClass(`planet ${planet.toLowerCase()}`);

      // Change content tab color when switching planets
      $('#content-tabs')
        .removeClass()
        .addClass(`content-tabs ${planet.toLowerCase()}`);

      // Change content when switching planets
      $('#planet-name').text(`${planetsJSON[key].name}`);
      $('#planet-text').text(`${planetsJSON[key].overview.content}`);
      $('#wiki-article a').attr('href', `${planetsJSON[key].overview.source}`);
      $('#rotation-stat-value').text(`${planetsJSON[key].rotation}`);
      $('#revolution-stat-value').text(`${planetsJSON[key].revolution}`);
      $('#radius-stat-value').text(`${planetsJSON[key].radius}`);
      $('#temperature-stat-value').text(`${planetsJSON[key].temperature}`);
    }
  }
}

function changePlanetContent(tab) {
  //   $('#planet-image img').attr(
  //     'src',
  //     `${planetsJSON[currentPlanet].images[tab]}`
  //   );
  for (var key in planetsJSON) {
    if (planetsJSON[key].name == currentPlanet) {
      if (tab === 'internal') {
        // Change the planet image
        $('#planet-image #planet').attr(
          'src',
          `${planetsJSON[key].images.internal}`
        );

        // Hide the surface overlay
        removeSurfaceOverlay();

        // Change the text.
        $('#planet-text').text(`${planetsJSON[key].structure.content}`);
        $('#wiki-article a').attr(
          'href',
          `${planetsJSON[key].structure.source}`
        );
      } else if (tab === 'planet') {
        // Change the planet image
        $('#planet-image #planet').attr(
          'src',
          `${planetsJSON[key].images.planet}`
        );

        // Hide the surface overlay
        removeSurfaceOverlay();

        // Change the text.
        $('#planet-text').text(`${planetsJSON[key].overview.content}`);
        $('#wiki-article a').attr(
          'href',
          `${planetsJSON[key].overview.source}`
        );
      } else if (tab === 'geology') {
        // Reset the planet image to be the surface
        $('#planet-image #planet').attr(
          'src',
          `${planetsJSON[key].images.planet}`
        );

        // Display the container that holds the surface png
        $('#planet-image #surface-overlay')
          .addClass('show-content')
          .attr('src', `${planetsJSON[key].images.geology}`);

        // Change the text.
        $('#planet-text').text(`${planetsJSON[key].geology.content}`);
        $('#wiki-article a').attr('href', `${planetsJSON[key].geology.source}`);
      }
    }
  }
  // Change the planet text
  // Change the wiki source
}

function removeSurfaceOverlay() {
  $('#planet-image #surface-overlay').removeClass('show-content');
}

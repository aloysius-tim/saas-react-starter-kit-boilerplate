/*!

=========================================================
* Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2018 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

//
// Bootstrap Datepicker
//

const Datepicker = (function() {
  // Variables

  const $datepicker = $('.datepicker');

  // Methods

  function init($this) {
    const options = {
      disableTouchKeyboard: true,
      autoclose: false,
    };

    $this.datepicker(options);
  }

  // Events

  if ($datepicker.length) {
    $datepicker.each(function() {
      init($(this));
    });
  }
})();

//
// Icon code copy/paste
//

('use strict');

const CopyIcon = (function() {
  // Variables

  let $element = '.btn-icon-clipboard',
    $btn = $($element);

  // Methods

  function init($this) {
    $this.tooltip().on('mouseleave', () => {
      // Explicitly hide tooltip, since after clicking it remains
      // focused (as it's a button), so tooltip would otherwise
      // remain visible until focus is moved away
      $this.tooltip('hide');
    });

    const clipboard = new ClipboardJS($element);

    clipboard.on('success', e => {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle');

      e.clearSelection();
    });
  }

  // Events
  if ($btn.length) {
    init($btn);
  }
})();

//
// Form control
//

('use strict');

const FormControl = (function() {
  // Variables

  const $input = $('.form-control');

  // Methods

  function init($this) {
    $this
      .on('focus blur', function(e) {
        $(this)
          .parents('.form-group')
          .toggleClass('focused', e.type === 'focus' || this.value.length > 0);
      })
      .trigger('blur');
  }

  // Events

  if ($input.length) {
    init($input);
  }
})();

//
// Google maps
//

let $map = $('#map-canvas'),
  map,
  lat,
  lng,
  color = '#5e72e4';

function initMap() {
  map = document.getElementById('map-canvas');
  lat = map.getAttribute('data-lat');
  lng = map.getAttribute('data-lng');

  const myLatlng = new google.maps.LatLng(lat, lng);
  const mapOptions = {
    zoom: 12,
    scrollwheel: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#444444' }],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [{ color: '#f2f2f2' }],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [{ saturation: -100 }, { lightness: 45 }],
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [{ visibility: 'simplified' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ color }, { visibility: 'on' }],
      },
    ],
  };

  map = new google.maps.Map(map, mapOptions);

  const marker = new google.maps.Marker({
    position: myLatlng,
    map,
    animation: google.maps.Animation.DROP,
    title: 'Hello World!',
  });

  const contentString =
    '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
    '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.open(map, marker);
  });
}

if ($map.length) {
  google.maps.event.addDomListener(window, 'load', initMap);
}

// //
// // Headroom - show/hide navbar on scroll
// //
//
// 'use strict';
//
// var Headroom = (function() {
//
// 	// Variables
//
// 	var $headroom = $('#navbar-main');
//
//
// 	// Methods
//
// 	function init($this) {
//
//     var headroom = new Headroom(document.querySelector("#navbar-main"), {
//         offset: 300,
//         tolerance: {
//             up: 30,
//             down: 30
//         },
//     });
//
//
//
// 	// Events
//
// 	if ($headroom.length) {
// 		headroom.init();
// 	}
//
// })();

//
// Navbar
//

('use strict');

const Navbar = (function() {
  // Variables

  const $nav = $('.navbar-nav, .navbar-nav .nav');
  const $collapse = $('.navbar .collapse');
  const $dropdown = $('.navbar .dropdown');

  // Methods

  function accordion($this) {
    $this
      .closest($nav)
      .find($collapse)
      .not($this)
      .collapse('hide');
  }

  function closeDropdown($this) {
    const $dropdownMenu = $this.find('.dropdown-menu');

    $dropdownMenu.addClass('close');

    setTimeout(() => {
      $dropdownMenu.removeClass('close');
    }, 200);
  }

  // Events

  $collapse.on({
    'show.bs.collapse': function() {
      accordion($(this));
    },
  });

  $dropdown.on({
    'hide.bs.dropdown': function() {
      closeDropdown($(this));
    },
  });
})();

//
// Navbar collapse
//

const NavbarCollapse = (function() {
  // Variables

  let $nav = $('.navbar-nav'),
    $collapse = $('.navbar .collapse');

  // Methods

  function hideNavbarCollapse($this) {
    $this.addClass('collapsing-out');
  }

  function hiddenNavbarCollapse($this) {
    $this.removeClass('collapsing-out');
  }

  // Events

  if ($collapse.length) {
    $collapse.on({
      'hide.bs.collapse': function() {
        hideNavbarCollapse($collapse);
      },
    });

    $collapse.on({
      'hidden.bs.collapse': function() {
        hiddenNavbarCollapse($collapse);
      },
    });
  }
})();

//
// Form control
//

('use strict');

var noUiSlider = (function() {
  // Variables

  // var $sliderContainer = $('.input-slider-container'),
  // 		$slider = $('.input-slider'),
  // 		$sliderId = $slider.attr('id'),
  // 		$sliderMinValue = $slider.data('range-value-min');
  // 		$sliderMaxValue = $slider.data('range-value-max');;

  // // Methods
  //
  // function init($this) {
  // 	$this.on('focus blur', function(e) {
  //       $this.parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
  //   }).trigger('blur');
  // }
  //
  //
  // // Events
  //
  // if ($input.length) {
  // 	init($input);
  // }

  if ($('.input-slider-container')[0]) {
    $('.input-slider-container').each(function() {
      const slider = $(this).find('.input-slider');
      const sliderId = slider.attr('id');
      const minValue = slider.data('range-value-min');
      const maxValue = slider.data('range-value-max');

      const sliderValue = $(this).find('.range-slider-value');
      const sliderValueId = sliderValue.attr('id');
      const startValue = sliderValue.data('range-value-low');

      let c = document.getElementById(sliderId),
        d = document.getElementById(sliderValueId);

      noUiSlider.create(c, {
        start: [parseInt(startValue)],
        connect: [true, false],
        // step: 1000,
        range: {
          min: [parseInt(minValue)],
          max: [parseInt(maxValue)],
        },
      });

      c.noUiSlider.on('update', (a, b) => {
        d.textContent = a[b];
      });
    });
  }

  if ($('#input-slider-range')[0]) {
    let c = document.getElementById('input-slider-range'),
      d = document.getElementById('input-slider-range-value-low'),
      e = document.getElementById('input-slider-range-value-high'),
      f = [d, e];

    noUiSlider.create(c, {
      start: [
        parseInt(d.getAttribute('data-range-value-low')),
        parseInt(e.getAttribute('data-range-value-high')),
      ],
      connect: !0,
      range: {
        min: parseInt(c.getAttribute('data-range-value-min')),
        max: parseInt(c.getAttribute('data-range-value-max')),
      },
    }),
      c.noUiSlider.on('update', (a, b) => {
        f[b].textContent = a[b];
      });
  }
})();

//
// Popover
//

('use strict');

const Popover = (function() {
  // Variables

  let $popover = $('[data-toggle="popover"]'),
    $popoverClass = '';

  // Methods

  function init($this) {
    if ($this.data('color')) {
      $popoverClass = `popover-${$this.data('color')}`;
    }

    const options = {
      trigger: 'focus',
      template: `<div class="popover ${$popoverClass}" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>`,
    };

    $this.popover(options);
  }

  // Events

  if ($popover.length) {
    $popover.each(function() {
      init($(this));
    });
  }
})();

//
// Scroll to (anchor links)
//

('use strict');

const ScrollTo = (function() {
  //
  // Variables
  //

  const $scrollTo = $('.scroll-me, [data-scroll-to], .toc-entry a');

  //
  // Methods
  //

  function scrollTo($this) {
    const $el = $this.attr('href');
    const offset = $this.data('scroll-to-offset')
      ? $this.data('scroll-to-offset')
      : 0;
    const options = {
      scrollTop: $($el).offset().top - offset,
    };

    // Animate scroll to the selected section
    $('html, body')
      .stop(true, true)
      .animate(options, 600);

    event.preventDefault();
  }

  //
  // Events
  //

  if ($scrollTo.length) {
    $scrollTo.on('click', function(event) {
      scrollTo($(this));
    });
  }
})();

//
// Tooltip
//

('use strict');

const Tooltip = (function() {
  // Variables

  const $tooltip = $('[data-toggle="tooltip"]');

  // Methods

  function init() {
    $tooltip.tooltip();
  }

  // Events

  if ($tooltip.length) {
    init();
  }
})();

function loadJquery() {
  'use strict';
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    }
    , BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    }
    , iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
    , Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    }
    , Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    }
    , any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  // Full Height
  var fullHeight = function () {
    if (!isMobile.any()) {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    }
  };
  // Animations
  var contentWayPoint = function () {
    var i = 0;
    $('.animate-box').waypoint(function (direction) {
      if (direction === 'down' && !$(this.element).hasClass('animated')) {
        i++;
        $(this.element).addClass('item-animate');
        setTimeout(function () {
          $('body .animate-box.item-animate').each(function (k) {
            var el = $(this);
            setTimeout(function () {
              var effect = el.data('animate-effect');
              if (effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if (effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if (effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else {
                el.addClass('fadeInUp animated');
              }
              el.removeClass('item-animate');
            }, k * 200, 'easeInOutExpo');
          });
        }, 100);
      }
    }, {
      offset: '85%'
    });
  };
  // Sections background image from data background
  var pageSection = $('.bg-img, section');
  pageSection.each(function () {
    if ($(this).attr('data-background')) {
      $(this).css('background-image', 'url(' + $(this).data('background') + ')');
    }
  });
  // Document on load.
  $(function () {
    fullHeight();
    contentWayPoint();
  });
  // Show more
  $(function () {
    $(document).on('click', '.brian-more-trigger', function (event) {
      event.preventDefault();
      if ($('.brian-show-more-container').hasClass('visible')) {
        $('.brian-show-more-container').toggleClass('animated');
        $('.brian-show-more-container').removeClass('visible');
      } else {
        $('.brian-show-more-container').addClass('visible');
        $('.brian-show-more-container').removeClass('animated');
        $('.brian-more-wrapper').addClass('hidden');
      }
    })

  });
  $(function () {
    var self = this;
    var $grid = $('.grid');

    $grid.each(function () {
      var $el = $(this);
      var initial_items = 9;

      function showNextItems(pagination) {
        var itemsMax = $('.visible_item').length;
        var itemsCount = 0;
        $('.visible_item').each(function () {
          if (itemsCount < pagination) {
            $(this).removeClass('visible_item');
            itemsCount++;
          }
        });
        if (itemsCount >= itemsMax) {
          $('.shop-brian-more-trigger').hide();
        }
      }

      $('.shop-brian-more-trigger').on('click', function (e) {
        e.preventDefault();
        var next_items = 9;
        showNextItems(next_items);
      });
    });
  });
  // Progress-wrap
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 150;
  var duration = 550;
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > offset) {
      $('.progress-wrap').addClass('active-progress');
    } else {
      $('.progress-wrap').removeClass('active-progress');
    }
  });
  $('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  });
}

function stopEvtPropagation(event) {
  event.stopPropagation();
}

function disableZooming(view) {
  // Removes the zoom action on the popup
  view.popup.actions = [];

  // exclude the zoom widget from the default UI
  view.ui.components = ['attribution', 'search'];

  // disable mouse wheel scroll zooming on the view
  view.on('mouse-wheel', stopEvtPropagation);

  // disable zooming via double-click on the view
  view.on('double-click', stopEvtPropagation);

  // disable zooming out via double-click + Control on the view
  view.on('double-click', ['Control'], stopEvtPropagation);

  // disables pinch-zoom and panning on the view
  view.on('drag', stopEvtPropagation);

  // disable the view's zoom box to prevent the Shift + drag
  // and Shift + Control + drag zoom gestures.
  view.on('drag', ['Shift'], stopEvtPropagation);
  view.on('drag', ['Shift', 'Control'], stopEvtPropagation);

  // prevents zooming with the + and - keys
  view.on('key-down', function (event) {
    const prohibitedKeys = ['+', '-', 'Shift', '_', '=', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'];
    const keyPressed = event.key;
    if (prohibitedKeys.indexOf(keyPressed) !== -1) {
      event.stopPropagation();
    }
  });

  view.zoom = 12;

  return view;
}

function loadMap() {
  const ersiModules = ['esri/Map', 'esri/views/MapView', 'esri/widgets/Search'];
  require(ersiModules, function (EsriMap, MapView, Search) {
    const map = new EsriMap({
      basemap: 'streets-navigation-vector'
    });

    const view = new MapView({
      container: 'brian-contactMap',
      map: map,
      zoom: 12,
      center: {
        latitude: 41.8883201688733,
        longitude: -87.6616576510587
      }
    });

    const search = new Search({view});

    view.ui.add(search, 'top-right');

    view.when((ctxView) => {
      search.search('350 N Odgen Ave, Chicago, IL 60607');
      disableZooming(ctxView);
    });
  });
}

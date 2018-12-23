$(document).ready(function() {
  "use strict";
  //Hakfnd Sticky Header Script
  $('.hakfnd-header').sticky ({
    topSpacing: 0,
    zIndex: 4
  });

  //Hakfnd Parallax Scroll Script
  $('.hakfnd-navigation ul li a').mPageScroll2id ({
    offset: '.sticky-wrapper',
  });

  //Hakfnd Add Class CSS Script
  $('.hakfnd-toggle').on('click', function () {
    $('.header-right').toggleClass('open');
    $('.hakfnd-navigation').toggleClass('open');
    $('.hakfnd-toggle').toggleClass('active');
  });
  $('.hakfnd-navigation ul li a').on('click', function () {
    $('.hakfnd-navigation').removeClass('open');
    $('.header-right').removeClass('open');
    $('.hakfnd-toggle').removeClass('active');
  });

  //Hakfnd Get Inline CSS Script
  $(window).resize(function() {
    if (screen.width >= 768) {
      $('.hakfnd-navigation').css('padding-top', $('.hakfnd-header').outerHeight());
    };
  });
  $(window).trigger('resize');

  //Hakfnd Wow Animation Script
  $('body').waypoint(function() {
    new WOW().init();
  },
  {
    offset: '100%',
    triggerOnce: true,
  });

  //Hakfnd Progress Bar Script
  $('.skill-item').waypoint(function() {
    $('.circle-progressbar').circleProgress ({
      size: 100,
      fill: {
        color: '#ffffff'
      },
      thickness: 10,
      emptyFill: 'transparent',
      startAngle: 300,
      reverse: false,
      lineCap: 'round',
      animation: {
        duration: 1800
      }
    })
  },
  {
    offset: '100%',
    triggerOnce: true,
  });

  //Hakfnd Counter Script
  $('.hacfun-counter').counterUp ({
    delay: 1,
    time: 500,
  });

  //Hakfnd Set Equal Height Script
  $('.hacfun-item').matchHeight ({
    property: 'height'
  });

  //Hakfnd Back Top Script
  var backtop = $('.hakfnd-back-top');
  var position = backtop.offset().top;
  $(window).scroll(function() {
    var windowposition = $(window).scrollTop();
    if(windowposition + $(window).height() == $(document).height()) {
      backtop.removeClass('active');
    }
    else if (windowposition > 150) {
      backtop.addClass('active');
    }
    else {
      backtop.removeClass('active');
    }
  });
  jQuery('.hakfnd-back-top a').click(function () {
    jQuery('body,html').animate ({
      scrollTop: 0
    }, 2000);
    return false;
  });
});

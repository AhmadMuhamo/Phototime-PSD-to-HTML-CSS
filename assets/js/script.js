console.log('App started!');

$(document).ready(function() {
  $('#intro').waypoint(
    function(direction) {
      if (direction == 'down') {
        $('.navigation').addClass('sticky-nav');
      } else {
        $('.navigation').removeClass('sticky-nav');
      }
    },
    {
      offset: '60px;'
    }
  );

  $('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top - 60
            },
            1000,
            function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                return false;
              } else {
                $target.attr('tabindex', '-1');
                $target.focus();
              }
            }
          );
        }
      }
    });

  /* Scrolling Animations */
  $('.intro-animate').waypoint(
    function(direction) {
      $('.intro-animate').addClass('animated fadeIn');
    },
    {
      offset: '70%'
    }
  );

  $('.section-design').waypoint(
    function(direction) {
      $('.iphone-img').addClass('animated fadeInUp');
    },
    {
      offset: '70%'
    }
  );

  $('.comm-img-container').waypoint(
    function(direction) {
      $('.comm-img-container').addClass('animated bounceInUp');
    },
    {
      offset: '70%'
    }
  );

  $('.input-group-append').waypoint(
    function(direction) {
      $('.fa-check').addClass('animated rubberBand');
    },
    {
      offset: '70%'
    }
  );

  /* Navbar Collapse */
  $('#nav-collapse').click(function() {
    var nav = $('.nav-left');
    var nav2 = $('.nav-right');
    var icon = $('.nav-collapse i');
    nav.slideToggle(200);
    nav2.slideToggle(200);

    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });
});

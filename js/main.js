(function () {
    var header = document.querySelector('.header');
    var logo = document.querySelector('.header__logo-pic');
  
    window.onscroll = function () {
      if (window.pageYOffset > 50) {
        header.classList.add('header_active');
        logo.classList.add('header__logo-pic-sm');
      } else {
        header.classList.remove('header_active');
        logo.classList.remove('header__logo-pic-sm');
      }
    };
  })();
  
  (function () {
    var body = document.getElementById('body');
    var burgerItem = document.querySelector('.burger');
    var menu = document.querySelector('.header__nav');
    var closeItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', function () {
      menu.classList.add('header__nav-active');
      body.classList.add('body-fixed');
    });
    closeItem.addEventListener('click', function () {
      menu.classList.remove('header__nav-active');
      body.classList.remove('body-fixed');
    });
  })(); //scroll to ancors
  
  
  (function () {
    function smoothScroll(targetEl, duration) {
      var headerElHeight = document.querySelector('.header').clientHeight;
      var target = document.querySelector(targetEl);
      var targetPosition = target.getBoundingClientRect().top - headerElHeight;
      var startPosition = window.pageYOffset;
      var startTime = null;
  
      var ease = function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      var animation = function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
  
      requestAnimationFrame(animation);
    }
  
    ;
  
    var scrollTo = function scrollTo() {
      var links = document.querySelectorAll('.js-scroll');
      var menu = document.querySelector('.header__nav');
      var body = document.getElementById('body');
      links.forEach(function (el) {
        el.addEventListener('click', function () {
          var currentTarget = el.getAttribute('href');
          smoothScroll(currentTarget, 1000);
          menu.classList.remove('header__nav-active');
          body.classList.remove('body-fixed');
        });
      });
    };
  
    scrollTo();
  })();
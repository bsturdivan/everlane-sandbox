(function() {
  window.onload = function() {
    var scroll, width;
    width = $('.slider__slide').outerWidth(true) * $('.slider__slide').length;
    $('.slider__container').css('width', width);
    scroll = new IScroll('.slider', {
      scrollX: true,
      scrollY: false,
      momentum: true,
      bounceTime: 600,
      deceleration: 0.002,
      snap: true,
      snapSpeed: 400,
      keyBindings: true,
      indicators: false
    });
    return document.addEventListener('touchmove', function(e) {
      return e.preventDefault();
    }, false);
  };

}).call(this);

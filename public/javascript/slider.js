(function() {
  $(document).ready(function() {
    return new IScroll($('.slider')[0], {
      scrollX: true,
      scrollY: false,
      momentum: true,
      snap: true,
      snapSpeed: 400,
      keyBindings: true,
      indicators: false
    });
  });

}).call(this);

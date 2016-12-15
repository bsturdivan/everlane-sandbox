$(document).ready ->
  new IScroll $('.slider')[0],
    scrollX: true,
    scrollY: false,
    momentum: true,
    snap: true,
    snapSpeed: 400,
    keyBindings: true,
    indicators: false

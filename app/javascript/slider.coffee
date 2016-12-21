#$(document).ready (e) ->
window.onload = () ->
  width = $('.slider__slide').outerWidth(true) * $('.slider__slide').length
  $('.slider__container').css 'width', width
  scroll = new IScroll '.slider',
    scrollX: true,
    scrollY: false,
    #startX: 270,
    momentum: true,
    bounceTime: 600,
    deceleration: 0.002,
    snap: true,
    snapSpeed: 400,
    keyBindings: true,
    indicators: false
			#el: $('.slider__nav')[0],
			#resize: false

  document.addEventListener 'touchmove', (e)->
    e.preventDefault()
  , false

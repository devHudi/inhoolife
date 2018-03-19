$(document).ready(() => {
  function start() {
    $(".roulette").roulette('start')
  }

  var option = {
    speed : 22,
    duration : 3,
    stopImageNumber : 0,
    startCallback : function() {
      console.log('start')
    },
    slowDownCallback : function() {
      console.log('slowDown')
    },
    stopCallback : function($stopElm) {
      console.log('stop')
    }
  }
  $('div.roulette').roulette(option);
})
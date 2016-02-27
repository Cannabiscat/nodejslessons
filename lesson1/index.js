var colorText = require('colors');
var player = require('play-sound')(opts= {});
console.log(colorText.random('PARABAM!!'));
player.play('parabam.ogg', function(err) {});

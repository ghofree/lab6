var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	console.log('inside randomPalette');
	// get a random palette from the top ones
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	
	console.log(randomPalette);
	res.json(randomPalette['colors']);


}
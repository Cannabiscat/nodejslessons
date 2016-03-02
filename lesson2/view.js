'use strict';
var View = function () {
	
	this.start  = function() {
		this.show('Hello! Welcome to the BlackJack Table!');
	};
	this.lose = function() {
		this.show('You lose!');
	};
	this.busted = function() {
		this.show('Busted!!!');
	}
	this.win = function() {
		this.show('You win! Congratz!');
	};
	this.show = function(message) {
		console.log(message);
	};
};
module.exports = View;
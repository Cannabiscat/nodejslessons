'use strict';

var Deck = function() {
	
	var suits=['♤','♥','♧','♦'];
	var noms=['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
	var deck=[];
	noms.forEach(function(nom) {
		suits.forEach(function(suit) {
			var val={};
			if (nom=='Jack'||nom=='Queen'||nom=='King') {
				val[nom+suit]=10;
			} else if(nom=='Ace') {
				val[nom+suit]=11;
			} else {
				val[nom+suit]=parseInt(nom);
			};
			deck.push(val);
		});
	});
	this.shuffleDeck = function() {
		var temp;
		var index;
		for (var i = 0; i < deck.length; i++) {
			index = Math.floor(Math.random() * (deck.length - i)) + i;
			temp = deck[i];
			deck[i] = deck[index];
			deck[index] = temp;
		};
		return deck;
	};
	this.nextCard = function() {
		return deck.shift();
	}

};

var Player = function () {
	let sum = 0;
	let card=[];
	this.status = true;
	let getCardNom = function(card) {
		var nom;
		for(var i in card) {
			nom = i;
		};
		return nom;
	};
	let getCardVal = function(card) {
		var val;
		for(var i in card) {
			val = card[i];
		};
		return val;
	};

	this.getCards = function() {
		return card.join('|');
	}
	this.getSum = function(){
		return sum;
	};
	this.addCard = function(crd) {
		card.push(getCardNom(crd));
		sum += getCardVal(crd);
	};

};
module.exports.Player = Player;
module.exports.Deck = Deck;

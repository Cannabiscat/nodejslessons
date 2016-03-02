'use strict';
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
function shuffleDeck(deck) {
	var temp;
	var index;
	for (var i=0; i< deck.length; i++) {
		index = Math.floor(Math.random()*(deck.length - i)) + i;
		temp = deck[i];
		deck[i] = deck[index];
		deck[index] = temp;
	};
};
console.log(deck);
shuffleDeck(deck);
console.log(deck);

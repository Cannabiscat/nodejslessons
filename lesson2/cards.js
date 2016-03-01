var suits=['♤','♥','♧','♦'];
var noms=['2','3','4','5','6','7','8','9','10','Jack','Queen','King','Ace'];
var deck={};
noms.forEach(function(nom) {
	suits.forEach(function(suit) {
		if (nom=='Jack'||nom=='Queen'||nom=='King') {
			deck[nom+suit]=10;
		} else if(nom=='Ace') {
			deck[nom+suit]=11;
		} else {
			deck[nom+suit]=nom;
		};
	});
});
console.log(Object.keys(deck).length);
function shuffleDeck(deck) {
	var temp;
	var index;
		
};

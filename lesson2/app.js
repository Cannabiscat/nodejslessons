'use strict';

//require('minimist');
var readline = require('readline');
var View = require('./view.js');
var Model = require('./model.js');


var deck = new Model.Deck();
var player = new Model.Player();
var comp = new Model.Player();
var view = new View();
deck.shuffleDeck();


view.show('Ход компьютера');
while (comp.status) {
    var nextC = deck.nextCard();
    comp.addCard(nextC);
    view.show(comp.getCards());
    var compare = player.getSum() - comp.getSum();
    if (comp.getSum() > 21) {
        view.win();
        comp.status = false;
        break;
    }
    ;
    if (compare < 0) {
        view.lose();
        comp.status = false;
    }
    ;
}
;



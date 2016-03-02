'use strict';


var View = require('./view.js');
var Model = require('./model.js');
var deck = new Model.Deck();
var player = new Model.Player();
var comp = new Model.Player();
var view = new View();
//
deck.shuffleDeck();
//view.start(); //Приглашение на игру
//view.show(deck.getCardVal(deck.deck[1]));

//view.show(deck.deck);
/* Этап 1. Приглашение на игру, если на входе да - игра началась, если нет - выход, если что-то ещё - повторить ввод.
Этап 2. Затем показать карту, проверка на перебор, проверка на блэкджек, если да - поздравление и переход к этапу 3, спросить ещё карту или нет, если нет - запуск игры компьютера, если да - возврат к началу этапа 2.
Этап 3. Вывод карты компьютера, проверка на перебор, если да - Вы выиграли, таймаут секунда, если меньше, чем у игрока - на начало этапа 3, если больше - сообщение Вы проиграли.
*/

//Сначала игра компьютера
view.show('Ход компьютера');
for (var i = 0; i < 3 ; i++) {
    var next = deck.nextCard();
    comp.addCard((next));
    view.show(comp.getSum());
    view.show(comp.getCards());
};
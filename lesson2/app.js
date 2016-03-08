'use strict';

//require('minimist');
const readline = require('readline');
const View = require('./view.js');
const Model = require('./model.js');


const deck = new Model.Deck();
const player = new Model.Player();
const comp = new Model.Player();
const view = new View();

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
rl.setPrompt('One more card?(y/n)> ');
view.start();

rl.question('Are you ready to play a game?(y/n)', (answ) => {
		if (answ === 'y') {
			deck.shuffleDeck();
			const next = deck.nextCard;
			player.addCard(next());
			view.show('Your card is: ' + player.getCards());
			view.show('You have ' + player.getSum());
			rl.prompt();
			rl.on('line', (line) => {

				if (line === 'n') {
					rl.close();
				} else if (line === 'y') {
					player.addCard(next());
					view.show(player.getCards());
					view.show('You have ' + player.getSum());
				} else {
					view.show('Wrong answer, enter "y" or "n"!')
				}
				if (player.getSum() > 21) {
					view.busted();
					player.status = false;
					rl.close();
				} else {
					rl.prompt();
				}
			}).on('close', function () {
				if (player.status) {
					view.show('Computer moving');
					while (comp.status) {
						comp.addCard(next());
						view.show(comp.getCards());
						let compare = player.getSum() - comp.getSum();
						if (comp.getSum() > 21) {
							view.win();
							comp.status = false;
							break;
						}
						if (compare < 0) {
							view.lose();
							comp.status = false;
						}
					}
				} else {
					view.lose();
					rl.close();
				}
				process.exit(0);
			});
		}
		else if (answ === 'n') {
			view.show('Goodbye!');
			rl.close();
		}
	}
);
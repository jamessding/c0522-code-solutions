console.log('Lodash is loaded:', typeof _ !== 'undefined');
var playerNames = ['James', 'Nathan', 'Tim', 'Yuhan'];
var deck = [];
var players = [];
var rankNames = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suitNames = ['clubs', 'diamonds', 'hearts', 'spades'];
for (var i = 0; i < 4; i++) {
  players.push({
    name: playerNames[i],
    hand: null
  });
  for (var j = 0; j < 13; j++) {
    deck.push({
      rank: rankNames[j],
      suit: suitNames[i]
    });
  }
}
var shuffledDeck = _.shuffle(deck);
var handCardNumber = 2;
var counter = 0;
for (var k = 0; k < players.length; k++) {
  for (var l = 0; l < handCardNumber; l++) {
    if (counter < handCardNumber) {
      players[k].hand = shuffledDeck[k];
      _.pull(shuffledDeck, shuffledDeck[k]);
      counter++;
    } else {
      counter = 0;
    }
  }

}

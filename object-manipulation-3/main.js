console.log('Lodash is loaded:', typeof _ !== 'undefined');
function cardGame(playerNames, handCardNumber) {
  // var playerNames = ['James', 'Nathan', 'Tim', 'Yuhan'];
  var deck = [];
  var players = [];
  var rankNames = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var suitNames = ['clubs', 'diamonds', 'hearts', 'spades'];
  // var handCardNumber = 2;
  for (var i = 0; i < 4; i++) {
    players.push({
      name: playerNames[i],
      hand: []
    });
    for (var j = 0; j < 13; j++) {
      deck.push({
        rank: rankNames[j],
        suit: suitNames[i]
      });
    }
  }
  var shuffledDeck = _.shuffle(deck);
  var counter = 0;
  for (var k = 0; k < players.length; k++) {
    for (var l = 0; l < handCardNumber; l++) {
      players[k].hand.push(shuffledDeck[k]);
      _.pull(shuffledDeck, shuffledDeck[k]);
      counter++;
      if (counter === handCardNumber) {
        counter = 0;
        break;
      }
    }
  }
  var winner = '';
  var winnerCardValue = 0;
  // var tiedPlayers = [];
  for (var m = 0; m < players.length; m++) {
    var playerCardValue = 0;
    for (var n = 0; n < handCardNumber; n++) {
      if (players[m].hand[n].rank >= 2 && players[m].hand[n].rank <= 10) {
        playerCardValue += players[m].hand[n].rank;
      } else if (players[m].hand[n].rank === 'Jack' || players[m].hand[n].rank === 'Queen' || players[m].hand[n].rank === 'King') {
        playerCardValue += 10;
      } else if (players[m].hand[n].rank === 'Ace') {
        playerCardValue += 11;
      }
    }
    if (playerCardValue > winnerCardValue) {
      winner = players[m];
      winnerCardValue = playerCardValue;
    }
  }
  console.log('winner:', winner);
}

cardGame(['James', 'Nathan', 'Tim', 'Yuhan'], 2);
// stores array of objects with the same high scores, runs card game again if array is > 1

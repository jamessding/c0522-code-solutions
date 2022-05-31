console.log('Lodash is loaded:', typeof _ !== 'undefined');
function cardGame(playerNames, handSize) {
  playGame(createPlayers(playerNames), createDeck(), handSize);
}
function createDeck() {
  var deck = [];
  var rankNames = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  var rankValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  var suitNames = ['clubs', 'diamonds', 'hearts', 'spades'];
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 13; j++) {
      deck.push({
        rank: rankNames[j],
        suit: suitNames[i],
        value: rankValues[j]
      });
    }
  }
  return deck;
}
function createPlayers(playerNames) {
  var players = [];
  for (var k = 0; k < playerNames.length; k++) {
    players.push({
      name: playerNames[k],
      hand: [],
      playerCardValue: null
    });
  }
  return players;
}
function playGame(players, deck, handSize) {
  var shuffledDeck = _.shuffle(deck);
  var counter = 0;
  var highestHandValue = null;
  var winners = [];
  for (var l = 0; l < players.length; l++) {
    players[l].hand = [];
    players[l].playerCardValue = null;
    for (var m = 0; m < handSize; m++) {
      players[l].hand.push(shuffledDeck[l]);
      _.pull(shuffledDeck, shuffledDeck[l]);
      players[l].playerCardValue += shuffledDeck[l].value;
      counter++;
      if (counter === handSize) {
        counter = 0;
        if (players[l].playerCardValue > highestHandValue) {
          highestHandValue = players[l].playerCardValue;
        }
      }
    }
  }
  for (var n = 0; n < players.length; n++) {
    if (players[n].playerCardValue === highestHandValue) {
      winners.push(players[n]);
    }
  }
  if (winners.length > 1) {
    playGame(winners, shuffledDeck, handSize);
  } else {
    console.log('Winner: ', winners[0]);
  }
}
cardGame(['James', 'Nathan', 'Tim', 'Yuhan'], 2);

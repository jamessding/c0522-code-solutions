console.log('Lodash is loaded:', typeof _ !== 'undefined');
var player = [];
var deck = [];

for (var i = 0; i < 4; i++) {
  player.push({
    name: '',
    hand: ''
  });
}

for (var j = 1; j < 14; j++) {
  for (var k = 1; k < 5; k++) {
    deck.push({
      rank: null,
      suit: null
    });
    if (j === 1) {
      deck[j * k].rank = 'Ace';
    } else if (j <= 10) {
      deck[j * k].rank = j;
    } else if (j === 11) {
      deck[j * k].rank = 'Jack';
    } else if (j === 12) {
      deck[j * k].rank = 'Queen';
    } else if (j === 13) {
      deck[j * k].rank = 'King';
    }
  }
}

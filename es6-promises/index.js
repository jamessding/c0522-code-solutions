const takeAChance = require('./take-a-chance');
const namePromise = takeAChance('James');

namePromise.then(value => {
  console.log(value);
});

namePromise.catch(error => {
  console.error(error.message);
});

const fs = require('fs');
const json = require('./data.json');

if (process.argv[2] === 'read') {
  for (var i = 1; i < json.nextId - 1; i++) {
    console.log(`${i}: ${json.notes[i]}`);
  }
} else if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('./data.json', jsonString, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  for (const key in json.notes) {
    if (key === process.argv[3].toString()) {
      json.notes[key] = process.argv[4];
    }
  }
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('./data.json', jsonString, err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  for (const key in json.notes) {
    if (key === process.argv[3].toString()) {
      delete json.notes[key];
    }
  }
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('./data.json', jsonString, err => {
    if (err) throw err;
  });
}

const fs = require('fs');
const json = require('./data.json');
const keyword = process.argv[2];

function toJSON() {
  const jsonString = JSON.stringify(json, null, 2);
  fs.writeFile('./data.json', jsonString, err => {
    if (err) throw err;
  });
}

if (keyword === 'read') {
  for (const key in json.notes) {
    console.log(`${key}: ${json.notes[key]}`);
  }
} else if (keyword === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  toJSON();
} else if (keyword === 'update') {
  for (const key in json.notes) {
    if (key === process.argv[3]) {
      json.notes[key] = process.argv[4];
    }
  }
  toJSON();
} else if (keyword === 'delete') {
  delete json.notes[process.argv[3]];
  toJSON();
}

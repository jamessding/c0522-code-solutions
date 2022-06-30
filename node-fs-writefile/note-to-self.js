const fs = require('fs');
const data = new Uint8Array(Buffer.from(process.argv[2] + '\n'));
fs.writeFile('note.txt', data, err => {
  if (err) throw err;
});

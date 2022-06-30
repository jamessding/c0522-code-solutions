const fs = require('fs');

function cat(i) {
  if (i < process.argv.length) {
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      cat(i + 1);
    });
  }
}

cat(2);

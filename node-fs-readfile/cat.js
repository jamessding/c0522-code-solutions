
const fs = require('fs');

function cat(i) {
  if (i >= 3) {
    i--;
    cat(i);
    fs.readFile(process.argv[i], 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
}

cat(process.argv.length);

// console.log(process.argv);

// const fs = require('fs');

// function cat(i) {
//   if (i < process.argv.length) {
//     cat(i + 1);
//     fs.readFile(process.argv[i], 'utf8', (err, data) => {
//       if (err) throw err;
//       console.log(data);
//     });
//   }
// }

// cat(2);

const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join('public', __dirname);

app.use(express.static(publicPath));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

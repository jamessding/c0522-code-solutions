const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
app.get('/api/grades', (req, res) => {
  const arr = [];
  for (const key in grades) {
    arr.push(grades[key]);
  }
  res.json(arr);
});

app.use(express.json());
app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  nextId++;
  res.status(201).json(req.body);
  grades[nextId] = req.body;
});

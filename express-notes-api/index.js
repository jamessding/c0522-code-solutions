const express = require('express');
const app = express();
const json = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const arr = [];
  for (const key in json.notes) {
    arr.push(json.notes[key]);
  }
  res.send(arr);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else if (!json.notes[id]) {
    res.status(404).send({
      error: 'cannot find note with id ' + id
    });
  } else {
    res.status(200).json(json.notes[id]);
  }
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else {
    const newNote = req.body;
    const id = json.nextId++;
    newNote.id = id;
    json.notes[id] = newNote;
    const jsonString = JSON.stringify(json, null, 2);
    fs.writeFile('./data.json', jsonString, err => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error: 'An unexpected error occured.'
        });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else if (!json.notes[id]) {
    res.status(404).send({
      error: 'cannot find note with id ' + id
    });
  } else {
    delete json.notes[id];
    const jsonString = JSON.stringify(json, null, 2);
    fs.writeFile('./data.json', jsonString, err => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error: 'An unexpected error occured.'
        });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else if (!req.body.content) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else if (!json.notes[id]) {
    res.status(404).send({
      error: 'cannot find note with id ' + id
    });
  } else {
    const editedContent = req.body.content;
    json.notes[id].content = editedContent;
    const jsonString = JSON.stringify(json, null, 2);
    fs.writeFile('./data.json', jsonString, err => {
      if (err) {
        console.error(err);
        res.status(500).send({
          error: 'An unexpected error occured.'
        });
      } else {
        res.status(200).json(json.notes[id]);
      }
    });
  }
});

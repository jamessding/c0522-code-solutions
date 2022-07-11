const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res, next) => {
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).send({
      error: 'score must be an integer from 0 to 100'
    });
    return;
  }
  const newGrade = req.body;
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).send({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  if (!Number.isInteger(req.body.score) || req.body.score < 0 || req.body.score > 100) {
    res.status(400).send({
      error: 'score must be an integer from 0 to 100'
    });
    return;
  }
  const newGrade = req.body;
  const sql = `
    update "grades"
       set "name"   = $1,
           "course" = $2,
           "score"  = $3
    where  "gradeId" = $4
    returning *;
  `;
  const params = [newGrade.name, newGrade.course, newGrade.score, gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *;
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

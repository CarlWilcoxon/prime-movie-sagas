const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    // return all categories
    const queryText = `
    SELECT
      "movies"."title",
      "movies"."poster",
      "movies"."description",
      ARRAY_AGG("name") "genres"
    FROM "movies"
    JOIN "movie_genres" ON "movie_id" = "movies"."id"
    JOIN "genres" ON "genre_id" = "genres"."id"
    WHERE "movies"."id" = ${req.params.id}
    GROUP BY "movies"."id"
    ORDER BY "movies"."title" ASC`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`Error on query ${error}`);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
  // return all genres
  const queryText = `UPDATE movies
                    SET title=$1,
                    description=$2
                    WHERE ID=$3`;
  const queryValues = [
    req.body.title,
    req.body.description,
    req.body.id,
  ]
  pool.query(queryText, queryValues)
      .then( (result) => {
          res.sendStatus(200);
      })
      .catch( (error) => {
          console.log(`Error on query ${error}`);
          res.sendStatus(500);
      });
});


module.exports = router;

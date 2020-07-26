const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// require routers
const detailsRouter = require('./routes/details.router');
const genresRouter = require('./routes/genres.router');
const moviesRouter = require('./routes/movies.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/details', detailsRouter);
app.use('/genres', genresRouter);
app.use('/movies', moviesRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
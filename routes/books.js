
const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');

router.get('/books', (_req, res, next) => {

	knex('books')
		.orderBy('title')
		.then((books) => {
      // res.setHeader('Content-Type', 'application/json');
      // res.sendStatus(200);
			res.send(books);
		})
		.catch((err) => {
			next(err);
		});
});
// const books = require('./routes/books');

router.get('/books/:id', (req, res, next) => {
  const id = req.params.id;
    knex('books')
      .where('id', id)
      .then((data) => {
        res.send(data);
      //   console.log(JSON.stringify(books));
      // if (!book) {
      //   return next();
      // }
      // res.setHeader('Content-Type', 'application/json');
      // res.sendStatus(200);
    //  res.send(book[id]);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/books', (req, res, next) => {

});

router.patch('/books/:id', (req, res, next) => {

});

router.delete('/books/:id', (req, res, next) => {

});
module.exports = router;

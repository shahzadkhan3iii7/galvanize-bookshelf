'use strict'
const data = require('../config/books.js');
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('books').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('books').insert(data.books)


            ]);
        });

};

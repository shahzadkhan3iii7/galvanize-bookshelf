'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgress://localhost/bookshelf_dev'
    },

    test: {
        client: 'pg',
        connection: 'postgress://localhost/bookshelf_test'
    },

    production: {}
};

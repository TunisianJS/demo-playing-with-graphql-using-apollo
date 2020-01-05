const knex = require('knex')({
    connection: {
      filename: "db.sqlite"
    }
  });

module.exports = {
    Query: {
        books: async () => {
            const books = await knex("books")
            .select().limit(10);        
            return books;
        } 
    }
}
const { gql } = require('apollo-server');

const typeDefs = gql`

    type Query {
        books: [Book]!
    }

    type Mutation {
        createBook: [Book]
    }

    type Book {
        id:ID!
        title: String!
        description: String
        authors: Author!
    }

    type Author {
        id: ID!
        name: String
    }
`;

module.exports= typeDefs;
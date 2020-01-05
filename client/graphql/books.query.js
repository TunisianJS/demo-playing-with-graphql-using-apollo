import gql from "graphql-tag";

const BOOKS_QUERY = gql`
  query Books {
    books {
    id
    title
		author{
      id 
      name
    }
  }
  }
`;

export default BOOKS_QUERY;

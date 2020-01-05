import React from "react";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import BOOKS_QUERY from "../graphql/books.query";

const Home = () => {
  const { data, loading, error } = useQuery(BOOKS_QUERY);


  console.log(data)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        {data.books.map(book => {
        return <li key={`book__${book.id}`}>
          <h3>{book.title}</h3> <small>{book.author.name}</small> </li>;
        })}
      </ul>
    </div>
  );

}
export default Home;

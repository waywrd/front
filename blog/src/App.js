import React from "react";
import AddUser from "./components/AddUser";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import GetUsers from "./components/GetUsers";

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: "http://localhost:5000/graphql"
});

const client = new ApolloClient({
  link,
  cache
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <AddUser />
        <GetUsers />
      </ApolloProvider>
    </div>
  );
};

export default App;

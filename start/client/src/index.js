import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';

import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://fullstack-tutorial-server-tmcieiiiow.now.sh'
})
const client = new ApolloClient({
  cache,
  link
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>, document.getElementById('root')
);
import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Header from './components/Header';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://192.168.1.7:5000/graphql',
  cache,
  onError: e => {
    console.log(e);
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

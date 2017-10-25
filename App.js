import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Decks from './components/Decks'

const decks = [
  {
    name: 'deck1'
  },
  {
    name: 'deck2'
  },
  {
    name: 'deck3'
  },
  {
    name: 'deck4'
  },
  {
    name: 'deck5'
  },
  {
    name: 'deck6'
  }
]

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Decks decks={decks}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c5e99b'
  }
})

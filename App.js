import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Decks from './components/Decks'

const decks = [
  {
    name: 'UdaciCards',
    cards: 1
  },
  {
    name: 'React Cards',
    cards: 0
  },
  {
    name: 'New Deck1',
    cards: 3
  },
  {
    name: 'deck4',
    cards: 2
  },
  {
    name: 'deck5',
    cards: 5
  },
  {
    name: 'deck6',
    cards: 0
  },
  {
    name: 'deck7',
    cards: 0
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

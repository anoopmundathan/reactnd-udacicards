import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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

const Deck = (props) => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={{fontSize: 30}}>{props.deck}</Text>
      </View>
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.main}>
        <View style={styles.container}>
          {decks.map(deck => <Deck deck={deck.name} />)}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'red'
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: 'lightblue',
    marginTop: 20
  },
  boxContainer: {
    height: 100,
    backgroundColor: '#e76e63',
    marginTop: 10
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

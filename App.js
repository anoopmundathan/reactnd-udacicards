import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  }
]

const Deck = (props) => {
  return(
    <View style={[styles.deck, {flex: 1}, {borderColor: 'red'}]}>
      <Text>{props.deck}</Text>
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {decks.map(deck => <Deck key={deck.name} deck={deck.name}/>)}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

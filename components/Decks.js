import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Deck extends Component {
  render() {
    const { deck, count } = this.props
    return(
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.title}>{deck}</Text>
          <Text style={styles.count}>{count} cards</Text>
        </View>
      </View>
    )
  }
}


class Decks extends Component {
  render() {
    const { decks } = this.props
    return(
      <View style={styles.deckContainer}>
        {decks.map(deck => <Deck 
          key={deck.name}
          deck={deck.name} 
          count={deck.cards} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 20
  },
  boxContainer: {
    height: 100,
    backgroundColor: '#67d5b5',
    borderBottomColor: '#379392',
    borderBottomWidth: 2
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  },
  count: {
    fontSize: 16,
    color: '#fff'
  }
})

export default Decks

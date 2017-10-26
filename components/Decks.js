import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const decksItems = [
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

class Deck extends Component {
  render() {
    const { deck, count, onDeckPress } = this.props
    return(
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => onDeckPress(deck)}>
            <Text style={styles.title}>{deck}</Text>
            <Text style={styles.count}>{count} cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class Decks extends Component {
  onDeckPress = (deck) => {
    this.props.navigation.navigate('DeckDetails', deck)
  }

  render() {
    return(
      <View style={styles.deckContainer}>
        {decksItems.map(deck => <Deck
          key={deck.name}
          deck={deck.name}
          onDeckPress={this.onDeckPress} 
          count={deck.cards} />)}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    alignItems: 'stretch',
    marginTop: 0
  },
  boxContainer: {
    height: 100
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 25,
  },
  count: {
    fontSize: 16,
  }
})

export default Decks

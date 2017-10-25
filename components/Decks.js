import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Deck = (props) => {
  return(
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={styles.title}>{props.deck}</Text>
      </View>
    </View>
  )
}

class Decks extends Component {
  render() {
    const { decks } = this.props
    return(
      <View style={styles.deckContainer}>
        {decks.map(deck => <Deck deck={deck.name} />)}
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
    flexDirection: 'row'
  },
  title: {
    fontSize: 25,
    color: '#fff'
  }
})

export default Decks

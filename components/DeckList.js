import React, { Component } from 'react'
import { 
  ScrollView,
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'

class Deck extends Component {
  render() {
    const { deck, count, onDeckPress } = this.props
    return(
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => onDeckPress({ deck, count })}>
            <Text style={styles.title}>{deck}</Text>
            <Text style={styles.count}>{count} cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class DeckList extends Component {
  onDeckPress = ({ deck, count }) => {
    this.props.navigation.navigate('DeckDetails', { deck, count })
  }

  render() {
    const { decks } = this.props
    return(
      <ScrollView style={styles.deckContainer}>
        {decks.map(deck => <Deck
          key={deck.name}
          deck={deck.name}
          onDeckPress={this.onDeckPress} 
          count={deck.cards} />)}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
  },
  boxContainer: {
    height: 100,
    borderWidth: 1,
    borderColor: '#c5c6b6'
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontSize: 25,
    textAlign: 'center'
  },
  count: {
    fontSize: 16,
    textAlign: 'center'
  }
})

function mapStateToProps({ deckItems}) {
  return {
    decks: deckItems
  }
}

export default connect(mapStateToProps)(DeckList)

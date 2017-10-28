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
    const { name, count, onDeckPress } = this.props
    return(
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => onDeckPress({ name, count })}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.count}>{count} cards</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class DeckList extends Component {
  onDeckPress = ({ name, count }) => {
    this.props.navigation.navigate('DeckDetails', { name, count })
  }

  render() {
    const { decks } = this.props
    return(
      <ScrollView style={styles.deckContainer}>
        {decks.map(deck => <Deck 
          key={deck.id}
          name={deck.name}
          count={deck.count}
          onDeckPress={this.onDeckPress} />)}
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

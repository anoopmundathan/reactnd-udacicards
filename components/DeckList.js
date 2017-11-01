import React, { Component } from 'react'
import { 
  ScrollView,
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Animated
 } from 'react-native'

import { connect } from 'react-redux'
import { fetchUdaciCards } from '../utils/api'

class Deck extends Component {
  state = {
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
  }

  render() {
    const { name, count, onDeckPress } = this.props
    const { opacity } = this.state
    return(
      <View style={styles.boxContainer}>
        <Animated.View style={[styles.box, { opacity }]}>
          <TouchableOpacity onPress={() => onDeckPress({ name, count })}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.count}>{count} cards</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    )
  }
}

class DeckList extends Component {
  
  componentDidMount() {
    // Get all flash cards from AsyncStorage
    fetchUdaciCards()
  }

  onDeckPress = ({ name, count }) => {
    this.props.navigation.navigate('DeckDetails', { name, count })
  }

  render() {
    const { decks } = this.props
    return(
      <ScrollView style={styles.deckContainer}>
        {Object.keys(decks).map(deck => <Deck 
          key={decks[deck].title}
          name={decks[deck].title}
          count={decks[deck].questions.length}
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

function mapStateToProps(state) {
  return {
    decks: state
  }
}

export default connect(mapStateToProps)(DeckList)

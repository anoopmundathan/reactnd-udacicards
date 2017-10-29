import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckDetail extends Component {

  onAddCard = () => {
    const { name, count } = this.props.navigation.state.params
    this.props.navigation.navigate('AddCard', { name })
  }

  onStartQuiz = () => {
    this.props.navigation.navigate('Quiz')
  }

  render() {
    const { name, count } = this.props.navigation.state.params
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.card}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={this.onAddCard}
            style={[styles.button, {backgroundColor: 'purple'}]}>
            <Text style={styles.buttonText}>Add Card</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={this.onStartQuiz}
            style={[styles.button, {backgroundColor: 'black'}]}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 50
  },
  card: {
    fontSize: 22
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})

export default DeckDetail

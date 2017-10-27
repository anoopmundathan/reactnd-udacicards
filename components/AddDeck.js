import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class AddDeck extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.enterContainer}>
          <Text>Enter</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>          
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 2,
    marginTop: 50,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  enterContainer: {
    flex:1,
  },
  buttonContainer: {
    flex:1,
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 30,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})

export default AddDeck

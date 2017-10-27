import React, { Component } from 'react'
import { 
  KeyboardAvoidingView,
  View, 
  Text, 
  TextInput,
  StyleSheet, 
  TouchableOpacity
 } from 'react-native'

class AddDeck extends Component {
  state = {
    text: ''
  }

  onInputChange = (text) => {
    this.setState({ text })
  }

  onSubmitButton = () => {
    this.props.navigation.goBack()
  }

  render() {
    const { text } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
        </View>
        <View style={styles.enterContainer}>
          <TextInput
            placeholder='Deck Title'
            onChangeText={this.onInputChange}
            style={styles.input}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={this.onSubmitButton}
            style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>          
        </View>
      </KeyboardAvoidingView>
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
    flex: 1,
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 20,
    fontSize: 25
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    backgroundColor: 'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})

export default AddDeck

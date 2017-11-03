import React, { Component } from 'react'
import { 
  KeyboardAvoidingView,
  View, 
  Text, 
  TextInput,
  StyleSheet, 
  TouchableOpacity
 } from 'react-native'

 import { addCard } from '../actions'
 import { addCardToDeck } from '../utils/api'
 import { connect } from 'react-redux'

class AddCard extends Component {
  state = {
    question: '',
    answer: ''
  }

  onQuestionChange = (text) => {
    this.setState({
      question: text
    })
  }

  onAnswerChange = (text) => {
    this.setState({
      answer: text
    })
  }

  onAddtButton = () => {
    const { question, answer } = this.state
    const deck = this.props.navigation.state.params.name
    this.props.addCard({ 
      question,
      answer,
      deck
    })
    addCardToDeck(deck, { question, answer })
    this.props.navigation.goBack()
  }

  render() {
    const { text } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.enterContainer}>
          <TextInput
            placeholder='Question'
            onChangeText={this.onQuestionChange}
            style={styles.input}/>
          <TextInput
          placeholder='Answer'
          onChangeText={this.onAnswerChange}
          style={styles.input}/>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={this.onAddtButton}
            style={styles.button}>
            <Text style={styles.buttonText}>Add Card</Text>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => dispatch(addCard(card))
  }
}

export default connect(null, mapDispatchToProps)(AddCard)

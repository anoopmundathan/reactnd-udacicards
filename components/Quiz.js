import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    count: 0, 
    answer: false,
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
  }

  onShowAnswer = () => {
    this.setState({
      answer: !this.state.answer
    })
  }

  onNext = () => {
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length
    if (this.state.count >= length - 1) {
      this.setState({
        count: 0
      })
    } else {
      this.setState({
        count: this.state.count + 1
      })
    }
  }

  render() {
    const { count, answer, opacity } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length
    return(
      <Animated.View style={[{flex: 1}, { opacity }]}>
        <View>
          <Text>{count + 1}/{length}</Text>
        </View>
        <View style={styles.titleContainer}>
          {answer && (
            <Animated.Text 
              style={[styles.title, { opacity }]}>
              {decks[name].questions[count].answer}
            </Animated.Text>
          )}
          {!answer && (
            <Animated.Text 
              style={[styles.title, { opacity }]}>
              {decks[name].questions[count].question}
            </Animated.Text>
          )}
          <TouchableOpacity
            onPress={this.onShowAnswer}>
            { answer && (
              <Animated.Text 
                style={[{fontSize: 20, marginTop: 30}, { opacity }]}>
                Show Question
              </Animated.Text>
            )}

            { !answer && (
              <Animated.Text 
                style={[{fontSize: 20, marginTop: 30}, { opacity }]}>
                Show Answer
              </Animated.Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity 
            onPress={this.onNext}
            style={styles.button}>
            <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, {backgroundColor: 'red'}]}>
            <Text style={styles.buttonText}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 40
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
    backgroundColor: 'green'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})
export default connect(mapStateToProps)(Quiz)


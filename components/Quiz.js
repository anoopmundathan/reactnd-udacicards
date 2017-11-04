import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

const Indicator = (props) => {
  return(
    <View style={styles.indicatorContainer}>
      <Text style={styles.indicatorText}>{props.count + 1}/{props.length}</Text>
    </View>
  )
}

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
        <Indicator count={count} length={length} />
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
        <View style={styles.buttonContainer}>
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
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    height: 30
  },
  indicatorText: {
    fontSize: 20,
    color: 'white'
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    padding: 10,
    borderRadius: 7,
    height: 50,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
    backgroundColor: 'green'
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center'
  },
})
export default connect(mapStateToProps)(Quiz)


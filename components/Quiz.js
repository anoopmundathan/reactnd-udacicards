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
    finished: false,
    correct: 0,
    opacity: new Animated.Value(0)
  }

  componentDidMount() {
    const { opacity } = this.state
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
  }

  onShowAnswer = () => {
    this.setState({ answer: !this.state.answer })
  }

  onClick = (value) => {
    const { decks } = this.props
    const { count } = this.state
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length
    const answer = decks[name].questions[count].answer
    if (answer === value) {
      this.setState({ correct: this.state.correct + 1 })
    } 

    if (count >= length - 1) {
      this.setState({ finished: true })
    } else {
      this.setState({ count: this.state.count + 1 })
    }
  }

  onDecks = () => {
    this.props.navigation.navigate('DeckList')
  }

  render() {
    const { count, answer, opacity, finished } = this.state
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length
    if(finished) {
      return(
        <View style={styles.finalContainer}>
          <Text style={{fontSize: 30}}>Score: {this.state.correct}/{length}</Text>
          <View>
            <TouchableOpacity 
              onPress={this.onDecks}
              style={[styles.button, {marginTop: 50}]}>
                <Text style={styles.buttonText}>Decks</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
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
            onPress={() => this.onClick('Yes')}
            style={styles.button}>
              <Text style={styles.buttonText}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={() => this.onClick('No')}
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
  finalContainer: {
    flex: 1,
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


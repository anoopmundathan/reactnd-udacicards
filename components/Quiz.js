import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends Component {
  state = {
    count: 0
  }
  onNext = () => {
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const length = decks[name].questions.length

    if (this.state.count > length) {
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
    const { decks } = this.props
    const { name } = this.props.navigation.state.params
    const index = this.state.count
    
    return(
      <View>
        <View style={{flex: 1}}>
          <Text>{decks[name].questions[index].question}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            onPress={this.onNext}
            style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}

const styles = StyleSheet.create({
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
export default connect(mapStateToProps)(Quiz)


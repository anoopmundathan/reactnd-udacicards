import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DeckDetail extends Component {
  render() {
    const { params } = this.props.navigation.state
    return(
      <View>
        <Text>{params}</Text>
      </View>
    )
  }
}

export default DeckDetail

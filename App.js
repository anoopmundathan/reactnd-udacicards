import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'

const DeckStack = StackNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      title: 'Detail'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import DeckDetails from './components/DeckDetails'

const DeckStack = StackNavigator({
  Decks: {
    screen: Decks,
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
      <ScrollView style={styles.container}>
        <DeckStack />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

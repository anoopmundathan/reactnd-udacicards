import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import DeckList from './components/DeckList'
import DeckDetails from './components/DeckDetails'
import AddDeck from './components/AddDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

const Tabs = TabNavigator({
  All: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'All Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-card' size={30} color={tintColor} />
    }
  },
  Add: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle' size={30} color={tintColor} />
    }
  }
})

const DeckStack = StackNavigator({
  DeckList: {
    screen: Tabs,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'white',
      title: `${navigation.state.params.deck}`,
      headerStyle: {
        backgroundColor: 'black',
      }
    })
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

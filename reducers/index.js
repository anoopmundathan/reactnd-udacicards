import { 
  ADD_DECK, 
  ADD_CARD,
  RECEIVE_DECKS } from '../actions'

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

function decks(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_DECKS: 
      return {
        ...state, 
        ...action.decks
      }
    case ADD_DECK:
      const newDeck = {
        [action.deck]: {
          title: action.deck,
          questions: []
        }
      } 
      return {
        ...state, 
        ...newDeck
      }
    case ADD_CARD:
      const { question, answer, deck } = action.card
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, { question, answer }]
        }
      }
    default: 
      return state
  }
}

export default decks

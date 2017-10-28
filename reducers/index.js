import { ADD_DECK } from '../actions'

const initialState = {
  deckItems: [
    {
      id: 901,
      name: 'UdaciCards',
      cards: 1
    }
  ]
}

function decks(state = initialState, action) {
  switch(action.type) {
    case ADD_DECK: 
      return {
        ...state,
        deckItems: [...state.deckItems, action.deck]
      }
    default: 
      return state
  }
}

export default decks

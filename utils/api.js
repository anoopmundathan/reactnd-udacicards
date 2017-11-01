import { AsyncStorage } from 'react-native'
const UDACICARDS_STORAGE_KEY = 'UdaciCards:flashcards'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
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

export function fetchUdaciCards() {
  return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
    .then(results => {
      if(results === null) {
        AsyncStorage.setItem(UDACICARDS_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
      } else {
        return results
      }
    })
}

import * as act from '../src/actions.js'
import reducer from '../src/reducer.js'
describe('resetGame', () => {
  it('should reset the game', () => {
    let state = {
      correctAnswer: 1
    };
    state = reducer(state, act.resetGame());
    expect(state).toEqual({
      correctAnswer: 25
    })
  })
})

describe('tryGuess', () => {
  it('should change guess', () => {
    let state = {
      guess: '5',
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100),
      showInfoModal: false
    };
    state = reducer(state, act.tryGuess('7'))
    expect(state).toEqual({
      guess: '7',
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100),
      showInfoModal: false
    })
  })
})
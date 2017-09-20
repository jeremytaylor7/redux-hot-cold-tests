import * as actions from '../src/actions.js'

describe('reset the game', () => {
  it('should reset the game', () => {
    const action = actions.resetGame()
    expect(action.type).toEqual('RESET_GAME');
  })
})

describe('guess', () => {
  it('should return guess action', () => {
    const guess = '3'
    const action = actions.tryGuess(guess);
    expect(action.type).toEqual('TRY_GUESS');
    expect(action.guess).toEqual('3');
  })
})
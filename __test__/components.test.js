it('Dispatches resetGame from resetGame', () => {
  const dispatch = jest.fn();
  const wrapper = shallow(
    <Guess dispatch={dispatch} />
  )
  const instance = wrapper.instance();
  const guess = '7';
  instance.resetGame(guess);
  expect(dispatch).toHaveBeenCalledWith(resetGame(guess))
})

//create test for guess
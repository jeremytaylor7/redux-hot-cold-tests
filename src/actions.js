export const RESET_GAME = 'RESET_GAME';
export const resetGame = () => ({
    type: RESET_GAME,
    // correctAnswer: Math.round(Math.random() * 100),
    correctAnswer: 25
});

export const TRY_GUESS = 'TRY_GUESS';
export const tryGuess = (guess) => ({
    type: TRY_GUESS,
    guess
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});



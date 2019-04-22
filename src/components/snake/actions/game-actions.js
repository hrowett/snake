export function newGame() {
    return {
        type: 'NEW_GAME'
    }
}

export function loseGame() {
    return {
        type: 'LOSE_GAME'
    }
}

export function incrementScore() {
    return {
        type: 'INCREMENT_SCORE'
    }
}

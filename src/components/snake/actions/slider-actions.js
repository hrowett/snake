export function changeBoardSize(size) {
    return {
        type: 'CHANGE_BOARD_SIZE',
        boardSize: size
    }
}

export function changeGameSpeed(speed) {
    return {
        type: 'CHANGE_GAME_SPEED',
        slider: speed,
    }
}
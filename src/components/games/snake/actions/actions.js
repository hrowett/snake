/**
 * These actions take the snake and define the next cycle
 * for rendering.
 *
 * @param snake
 * @returns {{type: string, coords: *}}
 */
export function moveSnake(snake) {
	const direction = snake.direction; // take snake direction
	let coords = snake.coords.slice(); // take snake coords
	const headCoords = coords[coords.length-1];
	const headMap = { // map direction to next move
		DOWN: [headCoords[0], headCoords[1]+1],
		UP: [headCoords[0], headCoords[1]-1],
		LEFT: [headCoords[0]-1, headCoords[1]],
		RIGHT: [headCoords[0]+1, headCoords[1]]
	};

	coords.push(headMap[direction]); // add moves
	coords.shift(); // removes the first element (i.e. last section of the snake)

	return {
		type: 'MOVE_SNAKE',
		coords: coords,
	}
}

export function setFood(coords) {
	return {
		type: 'SET_FOOD',
		food: coords
	}
}

export function setDirection(direction) {
	return {
		type: 'SET_DIRECTION',
		direction
	}
}

export function prependSnake(coords) {
	return {
		type: 'PREPEND_SNAKE',
		coords: coords
	}
}

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
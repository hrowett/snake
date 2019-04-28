/**
 * These actions take the snake and define the next cycle
 * for rendering.
 *
 * @param snake
 * @returns {{type: string, coords: *}}
 */
export function moveSnake(snake, boardSize, borderless) {
    const direction = snake.direction; // take snake direction
    let coords = snake.coords.slice(); // take snake coords
    const headCoords = coords[coords.length-1];
    const headMap = { // map selected direction to next move
        DOWN: borderless ? [headCoords[0], headCoords[1] == boardSize-1 ? 0 : headCoords[1]+1]
                : [headCoords[0], headCoords[1]+1], // if not in borderless mode then increment
        UP: borderless ? [headCoords[0], headCoords[1] == 0 ? boardSize-1 : headCoords[1]-1]
                : [headCoords[0], headCoords[1]-1], // if not in borderless mode then increment
        LEFT: borderless ? [headCoords[0] == 0 ? boardSize-1 : headCoords[0]-1, headCoords[1]]
                : [headCoords[0]-1, headCoords[1]], // etc
        RIGHT: borderless ? [headCoords[0] == boardSize-1 ? 0 : headCoords[0]+1, headCoords[1]]
                : [headCoords[0]+1, headCoords[1]], // etc
    };

    coords.push(headMap[direction]); // add next coords + moves
    coords.shift(); // removes the first element (i.e. last section of the snake)

    return {
        type: 'MOVE_SNAKE',
        coords: coords,
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
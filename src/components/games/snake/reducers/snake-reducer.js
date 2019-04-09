import { INITIAL_BOARD_SIZE, INITIAL_DIRECTION } from '../constants/constants';

/**
 * Actions for snake manipulation.
 */
const INITIAL_STATE = {
	direction: INITIAL_DIRECTION,
	coords: [
		[Math.floor(INITIAL_BOARD_SIZE/2), 0],
		[Math.floor(INITIAL_BOARD_SIZE/2), 1],
		[Math.floor(INITIAL_BOARD_SIZE/2), 2],
	]
};

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'MOVE_SNAKE':
			return {
				...state,
				coords: action.coords
			}

		case 'SET_DIRECTION':
			return {
				...state,
				direction: action.direction
			}

		case 'PREPEND_SNAKE':
			return {
				...state,
				coords: [[action.coords], ...state.coords]
			}

		case 'NEW_GAME':
			return {
                direction: INITIAL_DIRECTION,
                coords: [
                    [Math.floor(INITIAL_BOARD_SIZE/2), 0],
                    [Math.floor(INITIAL_BOARD_SIZE/2), 1],
                    [Math.floor(INITIAL_BOARD_SIZE/2), 2],
                ]
			};
	}

	return state;
}
import {INITIAL_GAME_SPEED, INITIAL_BOARD_SIZE} from "../constants/constants";

/**
 * Processes any changes to the slider game size or speed.
 */
const INITIAL_STATE = {
    value: INITIAL_GAME_SPEED,
    boardSize: INITIAL_BOARD_SIZE,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHANGE_GAME_SPEED':
            return {
                ...state,
                value: action.slider
            }

        case 'CHANGE_BOARD_SIZE':
            return {
                ...state,
                boardSize: action.boardSize
            }

    }
    return state;
}
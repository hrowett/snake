import {MIN_GAME_SPEED, INITIAL_BOARD_SIZE} from "../constants/constants";

const INITIAL_STATE = {
    value: MIN_GAME_SPEED,
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
import { combineReducers } from 'redux';
import snakeReducer from './snake-reducer';
import foodReducer from './food-reducer';
import gameReducer from './game-reducer';
import sliderReducer from './slider-reducer';

const rootReducer = combineReducers({
	snake: snakeReducer,
	food: foodReducer,
	game: gameReducer,
	slider: sliderReducer,
});

export default rootReducer;
import React from 'react';
import { SQUARE_SIZE } from '../constants/constants';
import '../../../../styles/games/snake/food.css';

export default function(props) {
	let style = {
		left: props.coords[0] * SQUARE_SIZE + 'px',
		top: props.coords[1] * SQUARE_SIZE + 'px',
		width: SQUARE_SIZE,
		height: SQUARE_SIZE,
	}

	return (
		<div className="snakeFood" style={style} />
	);
}
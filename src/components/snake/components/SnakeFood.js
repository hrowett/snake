import React from 'react';
import { SQUARE_SIZE } from '../constants/constants';
import '../../../styles/snake/snakeFood.css';

/**
 * Returns a <div/> element representing a piece of food.
 */
export default function(props) {
	let style = {
		left: props.coords[0] * SQUARE_SIZE + 'px', // position
		top: props.coords[1] * SQUARE_SIZE + 'px', // position
		width: SQUARE_SIZE,
		height: SQUARE_SIZE,
	}

	return (
		<div className="snakeFood" style={style} />
	);
}
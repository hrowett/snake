import React from 'react';
import '../../../styles/snake/snakeBoard.css';
import {SQUARE_SIZE} from '../constants/constants';

/**
 * Renders board for snake and food to be rendered
 * on top of.
 * The Board is composed of rows, made up of individual elements.
 */
export default function Board(props) {
	let board = [];
	// Adds coords to board based on size from slider - not currently used
	for(let x = 0; x < props.size; x++) {
		board[x] = [];
		for(let y = 0; y < props.size; y++) {
			board[x][y] = '';
		}
	}

	let style = {
		width: SQUARE_SIZE,
		height: SQUARE_SIZE,
	};

	return (
		<div className="snakeBoard" align="centre">
			{
				board.map((row, column) => {
					return (
						<div className="snakeBoardRow" key={column}>
							{
								row.map((cell, cellIndex) => <div className="snakeBoardCell" style={style} key={cellIndex} />)
							}
						</div>
					)
				})
			}
		</div>
	);
}
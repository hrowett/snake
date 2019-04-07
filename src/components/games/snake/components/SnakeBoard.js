import React from 'react';
import '../../../../styles/games/snake/snakeBoard.css';
import {SQUARE_SIZE} from '../constants/constants';


export default function Board(props) {
	let board = [];
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
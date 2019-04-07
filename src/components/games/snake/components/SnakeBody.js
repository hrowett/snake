import React from 'react';
import {SQUARE_SIZE} from "../constants/constants";
import '../../../../styles/games/snake/snakeBody.css';

export default function(props) {

	return (
		<div>
			{
				props.coords.map((coords, index) => {
                        const style = {
                            left: coords[0] * SQUARE_SIZE + 'px',
                            top: coords[1] * SQUARE_SIZE + 'px',
                            background: props.lost ? 'darkred' : '',
							 width: SQUARE_SIZE,
							 height: SQUARE_SIZE,
                        };
                        return <div className="snakeBody" style={style} key={index}/>
				})
			}
		</div>
	);
}
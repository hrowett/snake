import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from 'react-switch';
import { bindActionCreators } from 'redux';
import {INITIAL_DIRECTION, MAX_GAME_SPEED, MIN_GAME_SPEED, MIN_BOARD_SIZE, MAX_BOARD_SIZE} from '../constants/constants';
import Board from './SnakeBoard';
import Snake from './SnakeBody';
import Food from './SnakeFood';
import Slider from '../../slider/Slider';
import { moveSnake, setDirection, prependSnake } from '../actions/snake-actions';
import { newGame, loseGame, incrementScore } from '../actions/game-actions';
import { setFood } from '../actions/food-actions';
import { changeBoardSize, changeGameSpeed} from "../actions/slider-actions";
import '../../../styles/snake/snake.css';
import '../../../styles/buttons/switch.css';

class SnakeGame extends Component {
	constructor() {
		super();

		this.directionOnNextTick = INITIAL_DIRECTION;
		this.resetGame = this.resetGame.bind(this);
		this.checkGameLoss = this.checkGameLoss.bind(this);
		this.handleBoardSizeChange = this.handleBoardSizeChange.bind(this);
		this.handleGameSpeedChange = this.handleGameSpeedChange.bind(this);
		this.checkCollision = this.checkCollision.bind(this);

		this.state = {borderless: false};
	}

	componentWillMount() {
		this.setControls();
		this.generateNewFood();
	}

	componentDidUpdate() {
		this.checkFoodCollision();
		this.checkGameLoss();
	}

	checkGameLoss() {
		const snakeCoords = this.props.snake.coords;
		const snakeHeadCoords = snakeCoords[snakeCoords.length-1];

		// if collide with self, then lose
		if (!this.props.game.lost && this.checkCollision(snakeHeadCoords, snakeCoords.slice(0,-1))) {
            clearInterval(this.snakeInterval);
		    this.props.loseGame();
        }

		// if game is borderless & you collide with wall then lose
		if(!this.props.game.lost
            && !this.state.borderless
            && (snakeHeadCoords[0] === -1 ||
				snakeHeadCoords[0] === this.props.slider.boardSize ||
				snakeHeadCoords[1] === -1 ||
				snakeHeadCoords[1] === this.props.slider.boardSize)
            ) {
			clearInterval(this.snakeInterval);
			this.props.loseGame();
		}
	}

	/**
	 * Checks that snake hasn't collided with self
	 **/
    checkCollision(snakeHeadCoords, arrCoords) {
        return arrCoords.some(coords => coords[0] === snakeHeadCoords[0] && coords[1] === snakeHeadCoords[1]);
    }

	checkFoodCollision() {
		const snakeCoords = this.props.snake.coords;
		const snakeHeadCoords = snakeCoords[snakeCoords.length-1];
		const foodCoords = this.props.food;

		// if it ate a piece of food
		if(snakeHeadCoords[0] === foodCoords[0] && snakeHeadCoords[1] === foodCoords[1]) {
			this.generateNewFood();
			this.props.incrementScore();
			this.props.prependSnake(snakeCoords[snakeCoords.length-1].slice());
		}
	}

	resetGame() {
		this.props.newGame();
		this.generateNewFood();
		clearInterval(this.snakeInterval);
		this.directionOnNextTick = 'DOWN';
	}

	generateNewFood() {
		const x = Math.floor(Math.random() * this.props.slider.boardSize);
		const y = Math.floor(Math.random() * this.props.slider.boardSize);
		if(this.checkCollision([x, y], this.props.snake.coords)) this.generateNewFood();
		else this.props.setFood([x, y]);
	}

	setControls() {
		document.addEventListener('keydown', e => {
		    e.preventDefault();
			switch(e.keyCode) {
				case 65: // A key
				case 37: // left arrow
					// make sure we're not trying to move into the snake's body
					// or move outside the boundaries
					if(this.props.snake.direction !== 'RIGHT') this.directionOnNextTick = 'LEFT';
					break;
				case 68: // D key
				case 39: // right arrow
					if(this.props.snake.direction !== 'LEFT') this.directionOnNextTick = 'RIGHT';
					break;
				case 83: // S key
				case 40: // down arrow
					if(this.props.snake.direction !== 'UP') this.directionOnNextTick = 'DOWN';
					break;
				case 87: // W key
				case 38: // up arrow
					if(this.props.snake.direction !== 'DOWN') this.directionOnNextTick = 'UP';
					break;
				case 32: // space
					if(this.props.game.lost) this.resetGame();
					clearInterval(this.snakeInterval);
					this.snakeInterval = setInterval(() => {
						this.props.setDirection(this.directionOnNextTick);
						this.props.moveSnake(this.props.snake, this.props.slider.boardSize, this.state.borderless);
					}, this.props.slider.value);
					break;
				default:
					// do nothing
			}
		});
	}

	handleBoardSizeChange = (value) => {
		this.props.changeBoardSize(value);
		this.resetGame();
	}

	handleGameSpeedChange = (value) => {
	    // value = value from slider (1 - 100)
        // needs to be changed into the inverse
        // 1 = fastest, 100 = slowest
        const speed = MAX_GAME_SPEED - value;
        this.props.changeGameSpeed(speed);

        // this value needs to be changed before being passed into the slider.
	}


    handleBorderlessSwitch = () => {
        this.setState({
            borderless: !this.state.borderless,
        })
    }


	render() {

		return (
			<div>
                <h1 className="snakeTitle">Snake</h1>
				<h1 className="snakeCurrentScore">Score: {this.props.game.score}</h1>
				<h3 className="snakeHighScore">High Score: {this.props.game.highScore}</h3>
                <div className="snakeGame">

                    {/*<Slider className="sliderComponent" onChange={this.handleBoardSizeChange}*/}
                            {/*minValue={MIN_BOARD_SIZE}*/}
                            {/*maxValue={MAX_BOARD_SIZE}*/}
                            {/*label="Size"*/}
                            {/*value={this.props.slider.boardSize} />*/}

                    <Slider className="sliderComponent" onChange={this.handleGameSpeedChange}
                            minValue={MIN_GAME_SPEED}
                            maxValue={MAX_GAME_SPEED}
                            label="Speed"
                            value={MAX_GAME_SPEED - this.props.slider.value}/>

					<div className="snakeBoardWrapper">
						<Board size={this.props.slider.boardSize}/>
						<Snake coords={this.props.snake.coords} lost={this.props.game.lost} size={this.props.slider.boardSize}/>
						<Food coords={this.props.food} size={this.props.slider.boardSize} />
					</div>

                    {/*<Switch className="borderlessSwitch"*/}
                            {/*onChange={this.handleBorderlessSwitch}*/}
                            {/*checked={this.state.borderless}*/}
                            {/*onColor={'#7cb342'} />*/}
				</div>

				<p className="snakeHelp">Press spacebar to begin!</p>
			</div>
		);
	}
}

function mapStateToProps(props) {
	return props;
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		moveSnake,
		setFood,
		setDirection,
		prependSnake,
		newGame,
        loseGame,
		incrementScore,
		changeBoardSize,
        changeGameSpeed,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SnakeGame);

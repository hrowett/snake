import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Game from './SnakeGame';
import reducer from "../reducers/reducers";
import '../../../../styles/buttons/buttons.css';

/**
 * Uses redux to provide the game to the app.
 * This enables the re-render cycle to apply the actions.
 */
const store = createStore(reducer);

const SnakeGame = () => {
    return (
        <div className="appSnake">
            <Game />
        </div>
    );
};


export default class SnakeGameProvider extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Provider store={store} className="snakeGame">
                    <SnakeGame className="snake"/>
                </Provider>
            </div>
        )
    }
}



import React, {Component} from 'react';
import Snake from '../games/snake/components/SnakeGameProvider';
import '../../styles/homepage/homepage.css';
import '../../styles/buttons/buttons.css';
import '../../styles/header/header.css';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            activeGame: '',
        }
    }



    handleClose() {
        this.setState({activeGame: ''});
    }


    render() {
        let gameContainer;
            gameContainer = (
                <div className="activeSnakeContainer">
                    <Snake className="snakeGame" closeGame={this.handleClose}/>
                </div>
            )

        return (
            <div>
                <div className="snakeGameContainer">
                  {gameContainer}
                </div>
            </div>
        );
    }
}

export default HomePage;
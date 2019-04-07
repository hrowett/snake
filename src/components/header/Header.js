import React, { Component } from 'react';
import '../../styles/header/header.css';

class Header extends Component {

render () {
    return (
        <div>
        <header className="appHeader">
            <p className="mainHeaderText" alt="main">GAMESITE</p>
            <a className="subHeaderText" alt="sub">by HR</a>
        </header>
        </div>
    )
}

}


export default Header;
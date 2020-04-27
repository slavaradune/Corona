import React from 'react';
import logo from '../Kokoro.svg';

class Loading extends React.Component {

    render() {
        return (
            <img src={logo} className="App-logo-fast" alt="logo"/>
        )
    }
}

export default Loading;
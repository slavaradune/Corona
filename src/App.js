import React from 'react';
import './App.css';
import Menu from "./Menu";
import Language from "./Language";
import MainRouter from "./MainRouter";

class App extends React.Component {
    render() {
        let hebStyle = '';
        if (Language.getLanguage() === 'IL'){
            hebStyle = 'HebStyle'
        }
        return (
            <div className={"App " + hebStyle}>
                <header>
                    <Menu refresh={this.refresh.bind(this)}/>
                </header>
                <MainRouter/>
            </div>
        );
    }

    refresh() {
        this.forceUpdate()
    }
}

export default App;

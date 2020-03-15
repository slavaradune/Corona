import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Rules from "./components/Rules";
import Kids4_5 from "./components/Kids4_5";
import WhiteOrangeBelts from './components/WhiteOrangeBelts';

class MainRouter extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Rules}/>
                    <Route path="/kids4_5" component={Kids4_5}/>
                    <Route path="/white_orange_belts" component={WhiteOrangeBelts}/>
                </Switch>
            </Router>
        );
    }
}

export default MainRouter;
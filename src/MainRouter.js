import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Rules from "./components/Rules";
import Kids4_5 from "./components/Kids4_5";
import WhiteOrangeBelts from './components/WhiteOrangeBelts';
import BlueBelts from "./components/BlueBelts";
import YellowBelts from "./components/YellowBelts";
import GreenBelts from "./components/GreenBelts";
import Standings from "./components/Standings";

class MainRouter extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Rules}/>
                    <Route path="/kids4_5" component={Kids4_5}/>
                    <Route path="/white_orange_belts" component={WhiteOrangeBelts}/>
                    <Route path="/blue_belts" component={BlueBelts}/>
                    <Route path="/yellow_belts" component={YellowBelts}/>
                    <Route path="/green_belts" component={GreenBelts}/>
                    <Route path="/standings" component={Standings}/>
                </Switch>
            </Router>
        );
    }
}

export default MainRouter;
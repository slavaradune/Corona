import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Rules from "./components/Rules";

class MainRouter extends React.Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route path="/" component={Rules}/>
                    {/*<Route path="/kids4_5" component={Kids4_5}/>*/}
                    {/*<Route path="/belts1" component={Belts1}/>*/}
                </Switch>
            </Router>
        );
    }
}

export default MainRouter;
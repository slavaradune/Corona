import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-flags-select/css/react-flags-select.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

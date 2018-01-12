/* global require */

import React, { Component } from 'react';
import moment from 'moment';
import clock from './clock.png';
import './App.css';

class App extends Component {
    componentWillMount () {
        moment.updateLocale('pt-br', require('moment/locale/pt-br'));
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={clock} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to <strike style={{color: '#CCC'}}>React</strike> Moment JS</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;

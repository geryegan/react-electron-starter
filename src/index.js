import React, { Component } from 'react';
import { render } from 'react-dom';

require('../less/main.less');

class App extends Component {
    render() {
        return (
        <div>
            <h1>Hello World React + Electron</h1>
        </div>
        );
    }
}

render(<App />, document.getElementById('app'));

import React, { Component } from 'react';
import FixCoffee from './FixCoffee.js';
import './App.css';
import uuidv1 from 'uuid/v1';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <nav>
            <ul>
            <li>
                <a className="link" href="https://github.com/jimiljojo" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </nav>
        </div>
        <FixCoffee uuid={uuidv1()}/>
      </div>
    );
  }
}

export default App;

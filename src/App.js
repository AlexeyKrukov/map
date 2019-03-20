import React, { Component } from 'react';
import  { Input, Suggestions, AppMap } from './components'

import './App.scss';


class App extends Component {
  render() {

      return (
        <div className="app">
            <div className="app__suggestions">
                <Input />
                <Suggestions />
            </div>
            <div className="app__map">
                <AppMap />
            </div>
        </div>
    );
  }
}

export default App;

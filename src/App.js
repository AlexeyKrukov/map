import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import  { Input, Suggestions } from './components'

import './App.scss';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
  render() {
    return (
        <div className="app">
            <div className="app__suggestions">
                <Input />
                <Suggestions />
            </div>
            <div className="app__map">
                <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
  }
}

export default App;

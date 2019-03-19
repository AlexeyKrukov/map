import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import  { Input, Suggestions, Map } from './components'

import './App.scss';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          center: [55.751574, 17.573856]
      };
  }
  render() {
      const mapState = {
          center: this.state.center,
          zoom: 5
      };

      const WorkMap = () => (
          <YMaps>
              <Map instanceRef={(ref) => {
                    this.map = ref;
                   // const center = this.map.getCenter();
                    }}
                    onBoundsChange={()=> {
                       const center = this.map.getCenter();
                       this.setState({center: center});
                   }}
                  defaultState={mapState} width={1100} height={800}>
                  <Placemark geometry={this.state.center} />
              </Map>
          </YMaps>
      );
      return (
        <div className="app">
            <div className="app__suggestions">
                <Input />
                <Suggestions />
            </div>
            <div className="app__map">
                <WorkMap />
            </div>
        </div>
    );
  }
}

export default App;

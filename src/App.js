import React, { Component } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs, Polyline } from "react-google-maps";
import  { Input, Suggestions } from './components'

import './App.scss';


class App extends Component {
  render() {
      const Map = withScriptjs(withGoogleMap((props) =>
          <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: 0, lng: 0 }}
              onMapIdle={() => {
                  let ne = this.map.getBounds().getNorthEast();
                  let sw = this.map.getBounds().getSouthWest();
                  console.log(ne.lat() + ";" + ne.lng());
                  console.log(sw.lat() + ";" + sw.lng());
              }}
          >
              {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onDragEnd={(coord, index) => this.setMapCenterPoint(coord, index)} draggable />}
              {props.isMarkerShown && <Marker position={{ lat: -24.397, lng: 150.644 }} draggable />}
              {props.isMarkerShown && <Marker position={{ lat: -14.397, lng: 100.644 }} draggable />}
              <Polyline path={[{ lat: -34.397, lng: 150.644 }, { lat: -24.397, lng: 150.644 }, { lat: -14.397, lng: 100.644 }]}/>
          </GoogleMap>
      ));
    return (
        <div className="app">
            <div className="app__suggestions">
                <Input />
                <Suggestions />
            </div>
            <div className="app__map">
                <Map isMarkerShown
                     ref="map"
                     googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                     getCenter={this.getCenter}
                     loadingElement={<div style={{ height: `100%` }} />}
                     containerElement={<div style={{ height: `100%` }} />}
                     mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        </div>
    );
  }
    _handleZoomChanged() {
        this.setMapCenterPoint()
    }

    setMapCenterPoint(coord, index) {
        console.log(9999, coord, coord.latLng.lat(), coord.latLng.lng());
    }
}

export default App;

import React, { Component } from 'react';

import './App.scss';
import {Placemark, YMaps} from "react-yandex-maps";


class Map extends Component {
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
                }}
                     onBoundsChange={() => {
                         const center = this.map.getCenter();
                         this.setState({center: center});
                     }}
                     defaultState={mapState} width={1100} height={800}>
                    <Placemark geometry={this.state.center}/>
                </Map>
            </YMaps>
        );
        return (
            <WorkMap />
        )
    }
}

export default Map;

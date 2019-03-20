import React, { Component } from 'react';

import './styles.scss';
import { Placemark, YMaps, Map, Polyline } from "react-yandex-maps";


class AppMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: props.centerCoordinates,
            balloons: []
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            center: nextProps.centerCoordinates
        })
    }

    render() {
        const mapState = {
            center: this.state.center,
            zoom: 7
        };
        let coordinates = [];
        for (let i = 0; i < this.props.points.length; i++) {
            coordinates.push(this.props.points[i].coordinates);
        }
        const options = {
            draggable: true
        };

        const WorkMap = () => (
            <YMaps>
                <Map instanceRef={(ref) => {
                    this.map = ref;
                }}
                     onBoundsChange={() => {
                         const center = this.map.getCenter();
                         this.props.updateCenter(center);
                     }}
                    defaultState={mapState} width={1100} height={800}>
                    {
                        this.props.points.map(point => {
                            return <Placemark geometry={point.coordinates} options={options} properties={{
                                iconCaption: this.state.balloons.find(id => id === point.id) ? point.text : ''
                            }} instanceRef={(ref) => {
                                this.placemark = ref;
                                if(this.placemark) {
                                    this.placemark.events.add('dragend', (e) => {
                                        const coordinates = e.get('target').geometry.getCoordinates();
                                        this.props.updateCoordinates(coordinates, point.id);
                                    });
                                    this.placemark.events.add('click', (e) => {
                                        const numberOfBalloon = this.state.balloons.findIndex(id => id === point.id);
                                        const balloons = this.state.balloons;
                                        if (numberOfBalloon !== -1) {
                                            balloons.splice(numberOfBalloon, 1);
                                            this.setState({
                                                balloons
                                            });
                                            return;
                                        }
                                        balloons.push(point.id);
                                        this.setState({
                                            balloons
                                        });
                                    });
                                }
                            }}
                            />
                        })
                    }
                    <Polyline
                        geometry={coordinates}
                        options={{
                            balloonCloseButton: false,
                            strokeColor: '#000',
                            strokeWidth: 4,
                            strokeOpacity: 0.5,
                        }}
                    />
                </Map>
            </YMaps>
        );
        return (
            <WorkMap />
        )
    }
}

export default AppMap;

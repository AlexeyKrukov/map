import React, { Component } from 'react';
import './styles.scss';


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this._sendPoint = this._sendPoint.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    render() {
        return (
            <div className="input">
                <input type="text" ref="Input" placeholder="Новая точка маршрута" size="40" onKeyUp={this._sendPoint} onChange={this._onChange} required />
            </div>
        );
    }

    _sendPoint(e) {
        const { addPoint, centerCoordinates } = this.props;
        const { value } = this.state;
        if (e.keyCode === 13) {
            addPoint(value, centerCoordinates)
        }

    }

    _onChange(e) {
        this.setState({
            value: e.target.value
        })
    }
}

export default Input;

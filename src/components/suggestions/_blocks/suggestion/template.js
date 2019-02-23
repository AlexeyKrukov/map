import React, { Component } from 'react';
import './styles.scss';

class Suggestion extends Component {
    constructor(props) {
        super(props);
        this._deletePoint = this._deletePoint.bind(this);
    }

    render() {
        const { text } = this.props;
            return (
                <div className="suggestion">
                        {text}
                        <img src="/images/cross.png" alt="Удалить" width="18" height="18" onClick={this._deletePoint}/>
                </div>
            );
    }

    _deletePoint() {
        const { deletePoint, id } = this.props;
        deletePoint(id);
    }
}
export default Suggestion;

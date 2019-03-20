import { connect } from 'react-redux';
import Template from './template';
import {updateCenter} from "../../actions/map";
import {updateCoordinates} from "../../actions/points";

const mapStateToProps = store => {
    return {
        points: store.points.points,
        centerCoordinates: store.map.centerCoordinates
    }
};

const mapDispatchToProps = dispatch => ({
    updateCenter(coordinates) {
        return dispatch(updateCenter(coordinates));
    },
    updateCoordinates(coordinates, id) {
        return dispatch(updateCoordinates(coordinates, id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);

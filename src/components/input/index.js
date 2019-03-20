import { connect } from 'react-redux';
import  { addPoint } from '../../actions/points'
import Template from './template';

const mapStateToProps = store => {
    return {
        centerCoordinates: store.map.centerCoordinates
    }
};

const mapDispatchToProps = dispatch => ({
    addPoint(text, centerCoordinates) {
        return dispatch(addPoint(text, centerCoordinates));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);

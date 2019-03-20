import { connect } from 'react-redux';
import Template from './template';
import {updatePoints} from "../../actions/points";

const mapStateToProps = store => {
     return {
         points: store.points.points
     }
};

const mapDispatchToProps = dispatch => ({
    updatePoints(points) {
        return dispatch(updatePoints(points));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Template);

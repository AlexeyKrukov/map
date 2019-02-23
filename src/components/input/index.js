import { connect } from 'react-redux';
import  { addPoint } from '../../actions/points'
import Template from './template';

const mapDispatchToProps = dispatch => ({
    addPoint(text) {
        return dispatch(addPoint(text));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Template);

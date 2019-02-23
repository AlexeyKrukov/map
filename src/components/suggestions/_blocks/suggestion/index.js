import { connect } from 'react-redux';
import Template from './template';
import { deletePoint } from '../../../../actions/points'

 const mapDispatchToProps = dispatch => ({
    deletePoint(id) {
        return dispatch(deletePoint(id));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Template);

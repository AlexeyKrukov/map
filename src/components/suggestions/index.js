import { connect } from 'react-redux';
import Template from './template';

const mapStateToProps = store => {
     console.log(22, store)
     return {
         points: store.points.points
     }
};

export default connect(mapStateToProps)(Template);

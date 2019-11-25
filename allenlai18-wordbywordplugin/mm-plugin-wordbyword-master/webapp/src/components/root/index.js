import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {closeRootModal} from 'actions';
import {isRootModalVisible, parsePost} from 'selectors';

import Root from './root';

const mapStateToProps = (state) => {
    return {
        visible: isRootModalVisible(state),
        post: parsePost(state),
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    close: closeRootModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Root);

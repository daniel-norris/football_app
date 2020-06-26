import { connect } from 'react-redux';

import Field from './Field';

const mapStateToProps = state => {
    return {
        game: state.game,
        loaded: state.loaded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // handleGameUpdate: () => dispatch(getGame()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Field);



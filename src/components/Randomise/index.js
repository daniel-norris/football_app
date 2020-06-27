import { connect } from 'react-redux';
import { getGame } from '../../data/actions/api';

import Randomise from './Randomise';

const mapStateToProps = state => {
    return {
        game: state.game,
        loaded: state.loaded,
        uploaded: state.uploaded,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGameUpdate: id => dispatch(getGame(id)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Randomise);



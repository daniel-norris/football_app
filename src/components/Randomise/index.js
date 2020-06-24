import { connect } from 'react-redux';
import { getGame } from '../../data/actions/api';

import Randomise from './Randomise';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleGameUpdate: () => dispatch(getGame()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Randomise);



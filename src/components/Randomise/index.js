import { connect } from 'react-redux';
import { postPlayers } from '../../data/actions/api';

import Randomise from './Randomise';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlayerLoad: () => dispatch(postPlayers()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Randomise);



import { connect } from 'react-redux';
import { getGame } from '../../data/actions/api';

import Randomise from './Randomise';

const mapStateToProps = state => {
    return {
        team1: state.team1,
        team2: state.team2,
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        handleGameUpdate: () => dispatch(getGame()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Randomise);



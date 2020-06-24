import { connect } from 'react-redux';
import { createPlayer, randomiseTeams } from '../../data/actions/state';


import Players from './Players';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreatePlayer: data => dispatch(createPlayer(data)),
        handleRandomise: () => dispatch(randomiseTeams()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



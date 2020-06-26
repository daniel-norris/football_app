import { connect } from 'react-redux';
import { createPlayer, randomiseTeams } from '../../data/actions/state';
import { postPlayers } from '../../data/actions/api';

import Players from './Players';

const mapStateToProps = state => {
    return {
        players: state.players,
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreatePlayer: data => dispatch(createPlayer(data)),
        handlePlayerUpload: () => dispatch(postPlayers()),
        handleRandomise: () => dispatch(randomiseTeams()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



import { connect } from 'react-redux';
import { createPlayer, randomiseTeams } from '../../data/actions/state';
import { postPlayers } from '../../data/actions/api';

// adding programmatic navigation after http request below
import history from '../../history';

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
        handleRandomise: () => { dispatch(randomiseTeams());
            history.push("/draft/players/view"); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



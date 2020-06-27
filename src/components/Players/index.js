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
        uploaded: state.uploaded,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        handleCreatePlayer: data => dispatch(createPlayer(data)),
        handlePlayerUpload: (id) => dispatch(postPlayers(id)),
        handleRandomise: (data, uploaded) => { dispatch(randomiseTeams());
            history.push(`/draft/players/${data.id}/view`); }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



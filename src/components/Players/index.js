import { connect } from 'react-redux';
import { postPlayers } from '../../data/actions/api';

import Players from './Players';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => ({
        handleSubmit: () => dispatch(postPlayers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);



import { connect } from 'react-redux';
import { createPlayers } from '../../data/actions/state';


import Players from './Players';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreatePlayer: data => dispatch(createPlayers(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



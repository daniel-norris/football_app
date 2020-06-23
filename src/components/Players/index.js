import { connect } from 'react-redux';
import { createPlayer } from '../../data/actions/state';


import Players from './Players';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreatePlayer: data => dispatch(createPlayer(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);



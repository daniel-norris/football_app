import { connect } from 'react-redux';

import Randomise from './Randomise';

const mapStateToProps = state => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps)(Randomise);



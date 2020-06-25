import { connect } from 'react-redux';

import Field from './Field';

const mapStateToProps = state => {
    return {
        team1: state.team1,
        team2: state.team2,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // handleGameUpdate: () => dispatch(getGame()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Field);



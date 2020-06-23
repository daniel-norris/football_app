import { connect } from 'react-redux';
import { postTeams } from '../../data/actions/api';


import Teams from './Teams';

const mapStateToProps = state => {
    return {
        teams: state.teams,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCreateTeams: data => dispatch(postTeams(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);



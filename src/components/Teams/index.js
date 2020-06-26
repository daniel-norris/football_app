import { connect } from 'react-redux';
import { postTeams } from '../../data/actions/api';

// adding programmatic navigation after http request below
import history from '../../history';

import Teams from './Teams';

const mapStateToProps = state => {
    return {
        teams: state.teams,
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
            handleCreateTeams: data => { dispatch(postTeams(data));
            history.push("/draft/players")
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);



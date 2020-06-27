import { connect } from 'react-redux';

import Field from './Field';

const mapStateToProps = state => {
    return {
        game: state.game,
        loaded: state.loaded,
    };
};

export default connect(mapStateToProps)(Field);



import { createTeams } from './state';

// import API routes
import axios from '../../axios';

export const postPlayers = () => {
    return (dispatch, getState) => {
        /**
         *  POST /players
         */
        axios.post("/players", { players: getState().players })
            .then(console.log("posted"))
    };
};

export const postTeams = ({ team_1, team_2, players_side }) => {
    return (dispatch) => {
        /**
         *  POST /games
         */
        axios.post("/games", {
            team_1: team_1,
            team_2: team_2,
            players_side: players_side
        }).then(({ data }) => {
            dispatch(createTeams(data.data));
        })
    };
};


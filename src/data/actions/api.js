import { createTeams, createPlayers } from './state';

// import API routes
import axios from '../../axios';

export const postPlayers = () => {
    return (dispatch) => {
        /**
         *  POST /players
         */
        axios.post("/players").then(({ data }) => {
            dispatch(createPlayers(data));
        })
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


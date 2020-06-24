import { createTeams, createPlayer } from './state';

// import API routes
import axios from '../../axios';

export const postPlayers = () => {
    return (dispatch) => {
        /**
         *  POST /players
         */
        axios.post("/players").then(({ data }) => {
            dispatch(createPlayer(data));
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


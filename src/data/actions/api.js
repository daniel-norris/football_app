import { createTeams, updateGame } from './state';

// import API routes
import axios from '../../axios';

export const postPlayers = (id) => {
    return (dispatch, getState) => {
        /**
         *  POST /players
         */
        axios.post("/players", { players: getState().players }).then(() => {
            return axios.get(`/games/${id}`);
            }).then(({ data }) => {
                dispatch(updateGame(data.data));
            });
        }
    }


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

export const getGame = (id) => {
    return (dispatch) => {
        /**
         *  GET /game
         */
        axios.get(`/games/${id}`).then(({ data }) => {
            dispatch(updateGame(data.data));
        })
    };
};


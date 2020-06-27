import { createTeams, updateGame } from './state';

// import API routes
import axios from '../../axios';

export const postPlayers = (id) => {
    return (dispatch, getState) => {
        /**
         *  POST /players
         */
        axios.post("/players", { players: getState().players }).then(() => {
            /**
             * chained promise to overcome delays in post request above
             *
             *  GET /games/id
             */
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
         * handles componentdidmount if user navigates away from page
         *
         *  GET /games/id
         */
        axios.get(`/games/${id}`).then(({ data }) => {
            dispatch(updateGame(data.data));
        })
    };
};


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

export const postTeams = () => {
    return (dispatch) => {
        /**
         *  POST /games
         */
        axios.post("/games").then(({ data }) => {
            dispatch(createTeams(data));
        })
    };
};

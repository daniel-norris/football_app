import { createPlayers } from './state';

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

// export const getTeams = () => {
//     return (dispatch) => {
//         /**
//          *  GET /teams
//          */
//         axios.get("/").then(({ data }) => {
//             console.log(data);
//         })
//     };
// };


// action creator for new player array
export const createPlayer = ({ first, last, age, skill, position }) => {
    return {
        type: "CREATE_PLAYER",
        first: first,
        last: last,
        age: age,
        skill: skill,
        position: position,
    };
};

// action creator for new game object containing teams
export const createTeams = (data) => {
    return {
        type: "CREATE_TEAMS",
        teams: data
    };
};

// action creator for new game object containing players and teams
export const updateGame = (data) => {
    return {
        type: "UPDATE_GAME",
        game: data
    };
};

/**
 *  O(n) algorithm to shuffle players
 *  the function also splits the players array into two parts and assigns each team a team_id that corresponds with id on api
 *  saves the new teams in state to later be pushed as an array of player objects to api
 */
export const randomiseTeams = () => {

    return (dispatch, getState) => {

        // copying the players array of objects in state
        const players = [...getState().players]

        // assigning the api team ids for the currently created teams to variables
        const team1Id = getState().game.team_1.id
        const team2Id = getState().game.team_2.id

        // splitting the size of the currently created roster of players by half
        let teamSize = players.length / 2;

        // using the Fisher-Yates shuffle to swap each element of array with random one before it
        for (let i = players.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let swap = players[i];
            players[i] = players[j];
            players[j] = swap;
        }

        // splitting half of new randomised player array into team1
        let team1 = players.slice(0, teamSize);

        // creating a new key value pair with the players api team id
        team1.map((player, index) => (
            player.team_id = team1Id
        ))

        // splitting second half into team2
        let team2 = players.slice(teamSize, players.length);

        // creating key value pair with api team id
        team2.map((player, index) => (
            player.team_id = team2Id
        ))

        // dispatching to reducer to save in state
        dispatch({
            type: "RANDOMISE_TEAMS",
            team1: team1,
            team2: team2,
        });
    }
}

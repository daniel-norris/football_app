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

export const createTeams = (data) => {
    return {
        type: "CREATE_TEAMS",
        teams: data
    };
};

export const randomiseTeams = () => {

    return (dispatch, getState) => {

        const players = [...getState().players]

        let teamSize = players.length / 2;

        for (let i = players.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let swap = players[i];
            players[i] = players[j];
            players[j] = swap;
        }

        let team1 = players.slice(0, teamSize);
        let team2 = players.slice(teamSize, players.length);

        dispatch({
            type: "RANDOMISE_TEAMS",
            team1: team1,
            team2: team2,
        })

    }
}

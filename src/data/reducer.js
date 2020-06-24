
export const allocateTeam = () => {
    return Math.floor(Math.random() * 2) + 1 === 1 ? "A" : "B";
}

export const randomiseTeams = (state, { team1, team2 }) => ({
    ...state,
    team1: team1,
    team2: team2,
})

export const allocateTeamId = state => ({
})

export const createPlayer = (state, { first, last, age, skill, position }) => ({
    ...state,
    players: [
        ...state.players, {
            first: first,
            last: last,
            age: age,
            position: position,
            side: allocateTeam(),
        }
    ],
})

export const createTeams = (state, { teams }) => ({
    ...state,
    games: [
        ...state.games,
        teams
    ],
})

export const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return createPlayer(state, action);
        case "CREATE_TEAMS": return createTeams(state, action);
        case "RANDOMISE_TEAMS": return allocateTeamId(randomiseTeams(state, action));
        default: return state;
    }
}

export default reducer;
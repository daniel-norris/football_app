export const randomiseTeams = (state, { team1, team2 }) => ({
    ...state,
    team1: team1,
    team2: team2,
    uploaded: true,
})

export const createPlayer = (state, { first, last, age, skill, position }) => ({
    ...state,
    players: [
        ...state.players, {
            first: first,
            last: last,
            skill: skill,
            age: age,
            position: position,
        }
    ],
})

export const createTeams = (state, { teams }) => ({
    ...state,
    game: teams
})

export const updateGame = (state, { game }) => ({
    ...state,
    game: game,
    loaded: true,
})

export const team1Skill = ({ game }) => {
    return game['team_1'].players.reduce((acc, val) => acc.skill + val.skill);
}

export const team2Skill = ({ game }) => ({

})

export const predictWinner = state => ({
    ...state,
    game: {
        ...state.game,
        winner: team1Skill(state),
    }
})

export const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return createPlayer(state, action);
        case "CREATE_TEAMS": return createTeams(state, action);
        case "UPDATE_GAME": return updateGame(state, action);
        case "RANDOMISE_TEAMS": return predictWinner(randomiseTeams(state, action));
        default: return state;
    }
}

export default reducer;
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

export const team1SumSkill = ({ game }) => {
    return game['team_1'].players.reduce((acc, val) => acc.skill + val.skill, 0);
}

export const team2SumSkill = ({ game }) => {
    return game['team_2'].players.reduce((acc, val) => acc.skill + val.skill, 0);
}

export const predictWinner = state => ({
    ...state,
    game: {
        ...state.game,
        winner: team1SumSkill(state) > team2SumSkill(state) ? 1 : 2,
        // team_1: {
        //     ...state.game['team_1'],
        //     winChance: team1SumSkill / (team1SumSkill + team2SumSkill),
        // },
        // team_2: {
        //     ...state.game['team_2'],
        //     winChance: team2SumSkill / (team1SumSkill + team2SumSkill),
        // }
    }
})

export const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYER": return createPlayer(state, action);
        case "CREATE_TEAMS": return createTeams(state, action);
        case "UPDATE_GAME": return predictWinner(updateGame(state, action));
        case "RANDOMISE_TEAMS": return randomiseTeams(state, action);
        default: return state;
    }
}

export default reducer;
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
    return game['team_1'].players.map((player, index) => player.skill).reduce((acc, val) => +acc + +val, 0);
}

export const team2SumSkill = ({ game }) => {
    return game['team_2'].players.map((player, index) => player.skill).reduce((acc, val) => +acc + +val, 0);
}

export const sumBothTeamSkill = state => {
    return team1SumSkill(state) + team2SumSkill(state);
}

export const toTwoDecimal = value => {
    return +value.toFixed(2);
}

export const isTie = state => {
    return team1SumSkill(state) === team2SumSkill(state);
}

export const whoGreaterSkill = state => {
    return team1SumSkill(state) > team2SumSkill(state) ? 1 : 2;
}

export const predictWinner = state => ({
    ...state,
    game: {
        ...state.game,
        winner: isTie(state) ? 3 : (whoGreaterSkill(state)),
        team_1: {
            ...state.game['team_1'],
            winChance: toTwoDecimal(team1SumSkill(state) / sumBothTeamSkill(state)),
        },
        team_2: {
            ...state.game['team_2'],
            winChance: toTwoDecimal(team2SumSkill(state) / sumBothTeamSkill(state)),
        }
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
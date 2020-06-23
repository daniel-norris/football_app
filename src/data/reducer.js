
const createPlayers = (state, { players }) => ({
    ...state,
    players: [
        ...state.players,
        players
    ],
})

const createTeams = (state, { teams }) => ({
    ...state,
    games: [
        ...state.games,
        teams
    ],
})

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYERS": return createPlayers(state, action)
        case "CREATE_TEAMS": return createTeams(state, action)
        default: return state;
    }
}

export default reducer;
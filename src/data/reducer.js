
export const createPlayer = (state, { player }) => ({
    ...state,
    players: [
        ...state.players,
        player
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
        case "CREATE_PLAYER": return createPlayer(state, action)
        case "CREATE_TEAMS": return createTeams(state, action)
        default: return state;
    }
}

export default reducer;
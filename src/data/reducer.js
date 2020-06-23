
const createPlayers = (state, { players }) => ({
    ...state,
    players: [
        ...state.players,
        players
    ],
})

const reducer = (state, action) => {
    switch (action.type) {
        case "CREATE_PLAYERS": return createPlayers(state, action)
        default: return state;
    }
}

export default reducer;
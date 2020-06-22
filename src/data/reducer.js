
const loadTeams = () => {
    console.log("teams");
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FIND_TEAMS": return loadTeams(state, action)
        default: return state;
    }
}

export default reducer;
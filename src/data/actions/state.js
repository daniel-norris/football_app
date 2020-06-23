export const createPlayers = (data) => {
    return {
        type: "CREATE_PLAYERS",
        players: data
    };
};

export const createTeams = (data) => {
    return {
        type: "CREATE_TEAMS",
        teams: data.data
    };
};

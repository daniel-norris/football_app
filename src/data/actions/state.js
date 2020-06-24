export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYER",
        player: data
    };
};

export const createTeams = (data) => {
    return {
        type: "CREATE_TEAMS",
        teams: data
    };
};

export const createPlayer = (data) => {
    return {
        type: "CREATE_PLAYERS",
        players: data
    };
};

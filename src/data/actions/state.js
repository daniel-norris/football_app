export const createPlayer = ({ first, last, age, skill, position }) => {
    return {
        type: "CREATE_PLAYER",
        first: first,
        last: last,
        age: age,
        skill: skill,
        position: position,
    };
};

export const createTeams = (data) => {
    return {
        type: "CREATE_TEAMS",
        teams: data
    };
};

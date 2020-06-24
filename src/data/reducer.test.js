import reducer, {
    createPlayer,
    createTeams,
    randomiseTeams,
} from './reducer';
import initial from './initial';

const initialState = {
    players: [],
    games: [],
};

it('creates a player', () => {
    // create player creation tests here

    let result = createPlayer(initialState, {
        first: "James",
        last: "Smith",
        age: 25,
        position: "Forward"
    });

    expect(result.players[0]).toEqual({ first: "James", last: "Smith", age: 25, position: "Forward" });
    expect(result.players).not.toBe(initialState.players);

    result = createPlayer(result, { first: "Jimmy", last: "Hendrix", age: 29, position: "Forward" })

    expect(result.players[0]).toEqual({
        first: "James",
        last: "Smith",
        age: 25,
        position: "Forward",
    });

    expect(result.players[1]).toEqual({
        first: "Jimmy",
        last: "Hendrix",
        age: 29,
        position: "Forward",
    });

});

it('creates two teams', () => {
    // create team creation tests here

    let result = createTeams(initialState, { teams: { team_1: { name: "Squad Uno" } }});

    expect(result.games[0]).toEqual({ team_1: { name: "Squad Uno" }});
    expect(result.games).not.toBe(initialState.games);

    result = createTeams(result, { teams: { team_1: { name: "Squad Dos" } }})

    expect(result.games[0]).toEqual({ team_1: { name: "Squad Uno" }});
    expect(result.games[1]).toEqual({ team_1: { name: "Squad Dos" }});
});


it('randomly assigns a team to each player', () => {
    // create random team allocation tests here

    let result = createTeams(initialState, { teams: { team_1: { name: "Squad Uno" } }});

});

it('reduces', () => {
    // reducer tests here
});










// players = [
//     { first: "Alex", last: "Honnold", age: 26, height: 175, skill: 5, position: "Forward" },
//     { first: "Adam", last: "Ondra", age: 25, height: 189, skill: 5, position: "Forward" },
//     { first: "Lynn", last: "Hill", age: 41, height: 165, skill: 5, position: "Forward" },
//     { first: "Tommy", last: "Caldwell", age: 34, height: 175, skill: 5, position: "Forward" },
//     { first: "Jimmy", last: "Chin", age: 38, height: 185, skill: 4, position: "Midfielder" },
//     { first: "Catherine", last: "Destivelle", age: 37, height: 155, skill: 5, position: "Forward" },
//     { first: "Dean", last: "Potter", age: 32, height: 165, skill: 4, position: "Midfielder" },
//     { first: "Chris", last: "Bonnington", age: 81, height: 165, skill: 5, position: "Goalkeeper" },
//     { first: "Conrad", last: "Anker", age: 51, height: 175, skill: 5, position: "Goalkeeper" },
//     { first: "Nirmal", last: "Purja", age: 26, height: 175, skill: 5, position: "Forward" },
// ]
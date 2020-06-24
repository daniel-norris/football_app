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

    let result = createPlayer(initialState, { player: { first: "James" } });

    expect(result.players[0]).toEqual({ first: "James" });
    expect(result.players).not.toBe(initialState.players);

    result = createPlayer(result, { player: { first: "Jess"} })

    expect(result.players[0]).toEqual({ first: "James" });
    expect(result.players[1]).toEqual({ first: "Jess" });

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
    // create player tests here

});

it('reduces', () => {
    // reducer tests here
});
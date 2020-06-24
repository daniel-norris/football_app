import reducer, {
    createPlayer,
    createTeams,
    randomiseTeams,
} from './reducer';

const initialState = {
    players: [],
    games: [],
};

it('creates a player', () => {
    // create player tests here

    let result = createPlayer(initialState, { player: { first: "bob" } });

    expect(result.players[0]).toEqual({ first: "bob" });
});

it('creates two teams', () => {
    // create player tests here

});

it('randomly assigns a team to each player', () => {
    // create player tests here

});

it('reduces', () => {
    // reducer tests here
});
import reducer, {
    createPlayer,
    createTeams,
    randomiseTeams,
    predictWinner,
} from './reducer';
import initial from './initial';

const initialState = {
    players: [],
    game: [],
    uploaded: false,
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

    let result = createTeams(initialState, {
        teams: {
            id: 1,
            players_per_side: 5,
            winner: "",
            team_1: {
                id: 1,
                name: "Squad Uno",
                players: [],
            },
            team_2: {
                id: 2,
                name: "Squad Dos",
                players: [],
            }
        }
    });

    expect(result.game).toEqual({
        id: 1,
        players_per_side: 5,
        winner: "",
        team_1: {
            id: 1,
            name: "Squad Uno",
            players: [],
        },
        team_2: {
            id: 2,
            name: "Squad Dos",
            players: [],
        }
    });

});


it('reducer logic after randomisation', () => {
    // create reducer randomise team tests here

    let result = randomiseTeams(initialState, { uploaded: true });

    expect(result.uploaded).toEqual(true);
});

it('calculates win probability based off avg skill rating of team', () => {
    // create win probability tests here

    let many = {
        uploaded: false,
        game: {
            id: 1,
            players_per_side: 6,
            winner: "",
            team_1: {
                id: 1,
                name: "asdfas",
                players: [
                    {
                        id: 1,
                        first_name: "asdf",
                        last_name: "asdf",
                        full_name: "asdf asdf",
                        skill: 2,
                        age: 21,
                        position: "Forward",
                    },
                    {
                        id: 2,
                        first_name: "asdf",
                        last_name: "asdf",
                        full_name: "asdf asdf",
                        skill: 2,
                        age: 21,
                        position: "Forward",
                    }
                ]
            },
            team_2: {
                id: 2,
                name: "asdfas",
                players: [
                    {
                        id: 3,
                        first_name: "asdf",
                        last_name: "asdf",
                        full_name: "asdf asdf",
                        skill: 2,
                        age: 21,
                        position: "Forward",
                    },
                    {
                        id: 4,
                        first_name: "asdf",
                        last_name: "asdf",
                        full_name: "asdf asdf",
                        skill: 1,
                        age: 21,
                        position: "Forward",
                    }
                ]
            },
        }
    }

});


it('reduces', () => {
    // reducer tests here
});



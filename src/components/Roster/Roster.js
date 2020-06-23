import React from 'react';

const Roster = ({ players }) => (
    <section>
        <h1>Player Roster</h1>
        <ul>
            { players.length === 0 ? <p>No players created... </p> : (
                players.map((player, index) => (
                    <li key={ index }>
                        <section className="card flex column">
                            <p>#{ index + 1 }</p>
                            <p>Name: { player.first } { player.last }</p>
                            <p>Age: { player.age }</p>
                            <p>Position: { player.position }</p>
                            <p>Skill: { player.skill }
                                <img className="icon" alt="" src={require("../../assets/icons/star-solid.svg")}/>
                            </p>
                        </section>
                    </li>
                ))
            )}
        </ul>
    </section>
)

export default Roster;
import React from 'react';


function PlayerCard(props){
    return (
        <div>
        {props.player.map(player => (
             <div key={player.id}>
                 <h1>{player.name}</h1>
                 <h2>{player.country}</h2>
                 <h3>Searches: {player.searches}</h3>
                 </div>
        ))}
        </div>
    )
}

export default PlayerCard;
import React from 'react';


function PlayerCard(props){
    return (
        <div className="cardcontainer">
        {props.player.map(player => (
             <div className="playercard" key={player.id}>
                 <h1>{player.name}</h1>
                 <h2>{player.country}</h2>
                 <h3>Searches: {player.searches}</h3>
                 </div>
        ))}
        </div>
    )
}

export default PlayerCard;
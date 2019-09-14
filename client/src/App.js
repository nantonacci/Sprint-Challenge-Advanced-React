import React from 'react';

import './App.css';
import PlayerCard from './components/PlayerCard.js';
import Nav from './components/Nav.js'

class App extends React.Component {
  constructor(){
  console.log("constructor");
    super();
    this.state = {
      players: []
    };
  }
    
  componentDidMount() {
  console.log("CDM");
  // fetch player data
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
    
  }

  
  render() {
    console.log("render");
    console.log(this.state.players);
    return (
      <div>
        <Nav />
        <PlayerCard player={this.state.players} />
        
      </div>
    );
  }
}

export default App;
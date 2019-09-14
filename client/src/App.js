import React from 'react';

import './App.css';

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
    return (
      <div>
        Hi
        
      </div>
    );
  }
}

export default App;
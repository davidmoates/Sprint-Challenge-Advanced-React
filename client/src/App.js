import React from 'react';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      dataUSWNT: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(players => {
      console.log("fetch: players: ", players);
      this.setState({ ...this.state, dataUSWNT: players.message });
    })
    .catch(err => console.log("error on fetch: ", err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

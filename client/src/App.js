<<<<<<< HEAD
import React from "react";
import USWNTCards from "./components/USWNTCards";
import "./App.css";
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  flex-wrap: wrap;
`;

class App extends React.Component {
=======
import React from 'react';

import './App.css';

class App extends React.Component {

>>>>>>> 7db64df5d5e4e0b33904c5190ff1b0b588e12d0d
  constructor() {
    super();
    this.state = {
      dataUSWNT: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
<<<<<<< HEAD
      .then(res => res.json())
      .then(players => {
        console.log("fetch: players: ", players);
        this.setState({ ...this.state, dataUSWNT: players });
      })
      .catch(err => console.log("error on fetch: ", err));
  }

  render() {
    console.log("info about state ", this.state.dataUSWNT);
    return (
      <DivFlex className="App">
        {this.state.dataUSWNT &&
          this.state.dataUSWNT.map(players => {
            return (
              <USWNTCards
                name={players.name}
                country={players.country}
                searches={players.searches}
              />
            );
          })}
      </DivFlex>
    );
  }
=======
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
>>>>>>> 7db64df5d5e4e0b33904c5190ff1b0b588e12d0d
}

export default App;

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
}

export default App;

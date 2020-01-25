import React from "react";
import styled from "styled-components";

const DivCard = styled.div`
  background: lightblue;
  width: 30%;
  height: auto;
  margin: 10px;
  text-align: center;
`;

const H2 = styled.h2`
  color: black;
  text-height: 15px;
  text-align: center;
  padding: 5px;
  margin: 5px;
`;

const P = styled.li`
  color: white;
  text-height: 15px;
  margin: 5px;
`;

const USWNTCards = props => {
  return (
    <DivCard>
      {console.log("state in USWNTCards: ", props.dataUSWNT)}
      <H2>{props.name}</H2>
      <P>Country: {props.country}</P>
      <P>Searches: {props.searches}</P>
    </DivCard>
  );
};

export default USWNTCards;

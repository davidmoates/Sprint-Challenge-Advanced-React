import React from "react";
import styled from "styled-components";

<<<<<<< HEAD
const DivCard = styled.div`
  background: lightblue;
  width: 30%;
=======

const USWNTCards = () => {

  const DivCard = styled.div`
  return <span>todo: character</span>;	  background: rgba(50, 205, 50, 0.8);
}	  width: 30%;
>>>>>>> 7db64df5d5e4e0b33904c5190ff1b0b588e12d0d
  height: auto;
  margin: 10px;
  text-align: center;
`;

const H2 = styled.h2`
<<<<<<< HEAD
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
=======
  color: white;
  text-height: 15px;
  text-align: center;
`;

const Li = styled.li`
  color: white;
  text-height: 15px;
`;

const Img = styled.img`
  width: 50%;
  height: auto;
`;

const CharacterCard = props => {
  return (
    <DivCard>
      <H2>{props.character.name}</H2>
      <ul>
        <a href={props.character.url}>
          <Img src={props.character.image} alt={props.character.name} />
        </a>
        <Li>Gender: {props.character.gender}</Li>
        <Li>Species: {props.character.species}</Li>
        <Li>Alive, Dead, or Unknown: {props.character.status}</Li>
      </ul>
>>>>>>> 7db64df5d5e4e0b33904c5190ff1b0b588e12d0d
    </DivCard>
  );
};

<<<<<<< HEAD
export default USWNTCards;
=======
export default CharacterCard;
>>>>>>> 7db64df5d5e4e0b33904c5190ff1b0b588e12d0d

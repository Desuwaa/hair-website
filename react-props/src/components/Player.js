import React from "react";
import {Card} from "react-bootstrap";

const Player = ({name, team, nationality, jerseyNumber, age, imageUrl}) => {
    return (
        <Card style={{ width: '25rem', fontFamily: 'monospace', fontSize: 20, marginLeft: '25%', }}>
      <Card.Img style={{paddingTop: '10%', height: 400, }} variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title className="title">{name}</Card.Title>
        <Card.Text className="text">
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Player;

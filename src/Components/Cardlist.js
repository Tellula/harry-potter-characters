import React from "react";
import Card from "./Card";

const Cardlist = ({ characters }) => {
  const ImagedCharacters = [];

  for (const character of characters) {
    if (character.image !== "") {
      ImagedCharacters.push(character);
    }
  }

  return (
    <div className="cardContainer">
      {ImagedCharacters.map((user, index) => {
        return (
            
          <Card
            key={user.name}
            image={user.image}
            name={user.name}
            actor={user.actor}
            house={user.house}
          />
          
        );
      })}
    </div>
  );
};

export default Cardlist;

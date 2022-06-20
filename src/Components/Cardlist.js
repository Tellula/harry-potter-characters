import React from "react";
import Card from "./Card";

const Cardlist = ({ characters }) => {
  const ImagedCharacters = characters.filter((char) => char.image !== "");

  return (
    <div className="cardContainer">
      {ImagedCharacters.map((char, index) => {
        return (
          <Card
            key={char.name}
            image={char.image}
            name={char.name}
            actor={char.actor}
            species={char.species}
            gender={char.gender}
            dateOfBirth={char.dateOfBirth}
            eyeColour={char.eyeColour}
            hairColour={char.hairColour}
            wand={char.wand.core}
            patronus={char.patronus}
            house={char.house}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;

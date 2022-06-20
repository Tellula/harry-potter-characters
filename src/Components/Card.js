import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props, viewMode: true };
  }
  unknown(prop) {
    if (prop === "") {
      return (prop = "Unknown");
    } else {
      return prop;
    }
  }

  switchView = (event) => {
    this.setState({ viewMode: !this.state.viewMode });
  };

  render() {
    if (this.state.viewMode) {
      return (
        <div className="bg-light-yellow br3 pa3 ma2 bw2 shadow-5 card grow">
          <img
            className="portrait pointer"
            src={this.state.image}
            alt={this.state.name}
            onClick={this.switchView}
          />
          <div className="details">
            <h1 className="characterName">{this.state.name}</h1>
          </div>
        </div>
      );
    }
    return (
      <div className="bg-light-yellow br3 pa3 ma2 bw2 shadow-5 card grow">
        <div className=" details" onClick={this.switchView}>
          <h1 className="characterName">{this.state.name}</h1>
          <p>Actor : {this.unknown(this.state.actor)}</p>
          <p>Species : {this.unknown(this.state.species)}</p>
          <p>Gender : {this.unknown(this.state.gender)}</p>
          <p>Birthday : {this.unknown(this.state.dateOfBirth)}</p>
          <p>Eye Colour : {this.unknown(this.state.eyeColour)}</p>
          <p>Hair Colour : {this.unknown(this.state.hairColour)}</p>
          <p>Wand core : {this.unknown(this.state.wand)}</p>
          <p>Patronus : {this.unknown(this.state.patronus)}</p>
          <p>House : {this.unknown(this.state.house)}</p>
        </div>
      </div>
    );
  }
}

export default Card; 

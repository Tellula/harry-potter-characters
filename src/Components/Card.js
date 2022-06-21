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
        <div className="br3 bw2 shadow-5 card">
          <img
            className="portrait pointer"
            src={this.state.image}
            alt={this.state.name}
            onClick={this.switchView}
          />
          <div className="details">
            <h1 className="characterName grow">{this.state.name}</h1>
          </div>
        </div>
      );
    }
    return (
      <div className="tc br3  bw2 shadow-5 cardB">
        <div className=" detailsB" onClick={this.switchView}>
          <h1 className="characterName">{this.state.name}</h1>
          <p className="charInfo">Actor : {this.unknown(this.state.actor)}</p>
          <p className="charInfo">Species : {this.unknown(this.state.species)}</p>
          <p className="charInfo">Gender : {this.unknown(this.state.gender)}</p>
          <p className="charInfo">Birthday : {this.unknown(this.state.dateOfBirth)}</p>
          <p className="charInfo">Eye Colour : {this.unknown(this.state.eyeColour)}</p>
          <p className="charInfo">Hair Colour : {this.unknown(this.state.hairColour)}</p>
          <p className="charInfo">Wand core : {this.unknown(this.state.wand)}</p>
          <p className="charInfo">Patronus : {this.unknown(this.state.patronus)}</p>
          <p className="charInfo">House : {this.unknown(this.state.house)}</p>
        </div>
      </div>
    );
  }
}

export default Card; 

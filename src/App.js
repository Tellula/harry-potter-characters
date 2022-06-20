import React, { Component } from "react";
import Cardlist from "./Components/Cardlist";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchfield: "",
      map: true,
    };
  }

  componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((characters) => this.setState({ characters: characters }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onClick = (event) => {
    this.setState({ map: !this.state.map });
  };

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return this.state.map ? (
      <div className="map-container">
        <img
          className="gif grow"
          src="marauder.gif"
          alt="marauder"
          onClick={this.onClick}
        />
      </div>
    ) : (
      <div className="tc georgia">
        <div className="header flex items-center flex-column ">
          <h1 className="f1 title w-100">Harry Potter Characters</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundary>
            <Cardlist characters={filteredCharacters} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;

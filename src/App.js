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

  onClickMap = (event) => {
    this.setState({ map: !this.state.map });
  };

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return this.state.map ? (
      <div className="map-container">
      <div className="intro tc grow pointer" onClick={this.onClickMap}>
      I solemnly swear that i am up to no good !
      </div>
      <img src="marauder.gif" alt="marauder" className="gif"/>
      </div>
    ) : (
      <div className="tc georgia">
        <div className="header flex items-center flex-column ">
          <h1 className="f1 title w-100">Harry Potter Characters</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <button className="mischief pointer grow" onClick={this.onClickMap}>Mischief managed !</button>

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

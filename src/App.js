import React, { Component } from "react";
import Cardlist from "./Components/Cardlist";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";
import ErrorBoundary from "./Components/ErrorBoundary";
import './App.css';


class App extends Component {

  constructor() {
    super(); // 
    this.state = {
      characters: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch("http://hp-api.herokuapp.com/api/characters") // grab the list from a placeholder api
      .then((response) => response.json())
      .then((characters) => this.setState({ characters: characters })); // assign the fetched list to the state
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //Modifies the state to update when input is onchange(). Defined in SearchBox.js
  };

  render() {
    const { characters, searchfield } = this.state; //enables the use of robots and searchfield after, so we do not repeat ourselves
    const filteredCharacters = characters.filter((character) => {
      return character.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // if the list is not loaded for x reason, renders a loading title
    return !characters.length ? ( // replace the robots.length === 0 robots.length means false so !robots.length means true
      <h1>Loading</h1>
    ) : (
      <div className="tc">
      <img className="App-logo" src="dhblack.png" alt="" />
      <div className="header">
              <h1 className="f1 washed-yellow">Harry Potter Characters</h1>
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

import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Header />
      <Wrapper>
        {this.state.characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            name={character.name}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

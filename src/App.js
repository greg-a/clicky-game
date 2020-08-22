import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Alert from 'react-bootstrap/Button';

class App extends Component {

  state = {
    characters,
    selected: [],
    highScore: 0,
    currentScore: 0,
    alert: "none"
  };

  selectCharacter = id => {
    const selected = this.state.selected;

    if (!selected.includes(id)) {
      selected.push(id);

      const characters = this.state.characters;

      this.shuffle(characters);
      this.setState({
        currentScore: this.state.currentScore + 1,
        characters: characters,
        selected: selected
      });

      if (this.state.currentScore >= this.state.highScore) {
        this.setState({ highScore: this.state.highScore + 1 })
      }
    }
    else {
      this.setState({ currentScore: 0, selected: [], alert: "flex" });
      setTimeout(this.removeAlert, 3000);
    }
  };

  removeAlert = () => {
    this.setState({ alert: "none" })
  }

  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div className="container">
        <Header
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Alert variant="danger mr-5 ml-5" style={{display: this.state.alert}}>
          <p>
            You selected someone twice. You gotta start over!
          </p>
        </Alert>
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              selectCharacter={this.selectCharacter}
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

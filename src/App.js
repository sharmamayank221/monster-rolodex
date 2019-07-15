import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user =>
        this.setState({
          monsters: user
        })
      );
  }

  handleChange = e => {
    return this.setState({
      searchField: e.target.value
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="h1">Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="search Monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;

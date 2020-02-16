import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  setSearchField = e => this.setState({ searchField: e.target.value });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Joye's Goons!</h1>
          <SearchBox handleChange={this.setSearchField} placeholder='Search Monsters'></SearchBox>
          <CardList monsters={this.state.monsters} searchField={this.state.searchField}>
          </CardList>
        </header>
      </div>
    );
  }
}

export default App;

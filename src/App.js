import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type='search' placeholder='Search Monsters' onChange={e => this.setState({searchField: e.target.value})}/>
          <CardList monsters={this.state.monsters} searchField={this.state.searchField}>
          </CardList>
        </header>
      </div>
    );
  }
}

export default App;

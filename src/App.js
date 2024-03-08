import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      ()=>{
         return {monsters: users}
      }))
  }

  onSearchChange = (event)=>{ 
    const searchString = event.target.value.toLocaleLowerCase()
    this.setState({searchString})
  }
  
  render() {

    const {monsters, searchString} = this.state
    const {onSearchChange} = this

    const filteredList = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchString)
    })

    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox className = "monster-search-box" placeholder = "search name" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredList} />

      </div>
    );
  }
  
}

export default App;

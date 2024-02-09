import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import Search2 from './Components/Search/Search2';

function App() {
  return (
    <div className="App">
      <Search />
      <Search2 />
      <CardList />
    </div>
  );
}

export default App;

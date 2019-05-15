import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import MenuBottom from './components/Menu/MenuBottom';
import Catalogue from './components/Catalogue/Catalogue'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Menu />
      <Catalogue />
      <MenuBottom />
    </div>
  );
}

export default App;

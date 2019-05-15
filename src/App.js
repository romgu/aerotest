import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      {<Header />
      /*<Menu />
      <Catalogue />*/}
    </div>
  );
}

export default App;

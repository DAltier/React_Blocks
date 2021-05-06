import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main/>
    </div>
  );
}

export default App;
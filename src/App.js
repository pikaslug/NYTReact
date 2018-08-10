import React, { Component } from 'react';

// Global Stylings
import './App.css';
// import logo from './logo.svg';

// Components
import Search from './components/Search'
import Results from './components/Results'
import Saved from './components/Saved'

class App extends Component {
  render() {
    return <div className="App fluid-container">
        <header className="App-header">
          <h1 className="App-title">New York Times Article Scrubber</h1>
          <p className="App-intro">
            Search and annotate articles of interest
          </p>
        </header>

        <section className="container">
          <Search />
          <Results />
          <Saved />
        </section>
      </div>;
  }
}

export default App;

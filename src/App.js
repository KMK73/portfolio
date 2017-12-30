import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div id="nav_bar">
              <a className="logo" rel="index" href="/">
                <img src="./../assets/images/logo.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo"/>
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div id="page">
            <div className="container">
              <Route exact path="/" component={Home} />
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;

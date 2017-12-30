import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div id="nav_bar">
              <a class="logo" rel="index" href="/">
                <img src="./../assets/images/logo.png" alt="Wordpress Developer Logo, Web Developer Logo , Front End Developer Logo"/>
              </a>
            </div>
          </nav>
        </header>
        <main>
          <div id="page">
            <div class="container">
              <p>This is the main container</p>
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;

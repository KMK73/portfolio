import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import './scss/App.scss';
import NavBar from './components/NavBar';
import About from './components/About';

class App extends Component {

  componentDidMount() {
    console.log('component did mount');
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <div id="page">
            <div className="container">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;

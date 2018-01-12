import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import './scss/App.scss';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import WorkDetail from './components/WorkDetail';

class App extends Component {

  componentDidMount() {
    console.log('component did mount');
    // const spinner = document.getElementById('ipl-progress-indicator')
    // if(spinner){
    //   setTimeout(() => {
    //     spinner.classList.add('available')
    //     setTimeout(() => {
    //       spinner.outerHTML = ''
    //     }, 2000)
    //   }, 1000)
    // }
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
              <Route path="/contact" component={Contact} />
              <Route exact path="/work" component={Work} />
              <Route path="/work/:slug" component={WorkDetail}/>
            </div>
          </div>

        </main>
      </div>
    );
  }
}

export default App;

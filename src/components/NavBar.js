import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-page">
        <nav>
          <div id="nav_bar">
            <a className="logo" rel="index" href="/">
              <img src="./../assets/images/logo.png" alt="React Developer Logo, Web Developer Logo , Front End Developer Logo"/>
            </a>
              <section className="main-links show">
                <Link to='/about' className="">
                  <img src="./../assets/images/house.svg" class="nav-link" alt="About icon" />
                  <span>About</span>
                </Link>
                <Link to='/work' className="">
                  <img src="./../assets/images/coding.svg" class="nav-link" alt="Work icon" />
                  <span>Work</span>
                </Link>
                <Link to='/contact' className="">
                  <img src="./../assets/images/house.svg" class="nav-link" alt="Contact icon" />
                  <span>Contact</span>
                </Link>
              </section>
              <a id="mobile-link" href=""><i class="fa fa-bars"></i></a>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

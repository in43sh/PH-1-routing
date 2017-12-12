import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import Character from './Character/Character'
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <div>
        {/* This is App.js */}
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/people">People</Link>
        </div>

        <div>
          <Nav />
        </div>
          

        {/* <Route exact path="/" render={() => <div>Home</div>} />
        <Route path="/about" render={() => <div>About</div>} />
        <Route path="/people" render={() => <div>People</div>} /> */}

        {/* <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/people" component={People} /> */}

        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import People from './People/People';
import Character from './Character/Character'
import FAQ from './About/FAQ/FAQ';
import Company from './About/Company/Company';

export default function Nav (props) {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={() => 
          <About message="hello">
            <Route path="/about/faq" component={FAQ}/>
            <Route path="/about/company" component={Company}/>
        
          </About>
        } />

        <Switch>
          <Route path="/people/:id" component={Character} />
          <Route path="/people/" component={People} />
        </Switch> 
      </div>
    );
  }
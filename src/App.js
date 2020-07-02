import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Pricing from './pages/Pricing';
import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';

function App() {
  return (
  <Router>
      <Navigation/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/case-studies' component={CaseStudies}/>
        <Route path='/pricing' component={Pricing}/>
      </Switch>
      <Footer/>
  </Router>
  );
}

export default App;

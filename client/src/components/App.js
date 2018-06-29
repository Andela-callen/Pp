import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import About from './About';
import Contact from './Contact';
import Experience from './Experience';
import Galaimage from './Galaimage';
import Header from './common/Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Footer from './common/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/galaimage" component={Galaimage} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/experience" component={Experience} />
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

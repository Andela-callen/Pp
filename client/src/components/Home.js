import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';


import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Portfolio from './Portfolio';
import Contact from './Contact';

/**
 * @class Home
 * @extends {React.Component}
 * @render {render()}
 */
class Home extends React.Component {
  render() { // eslint-disable-line
    return (
        <div>
            <div id="content-wrap home">
            <div className="jumbotron" id="hero" data-stellar-background-ratio="0.5" data-stellar-vertical-offset="0">
                <div className="container padded-multiline">
                    <div className="down-bounce">
                        <h1>* * * * *</h1>
                        <q className="typed">Great things in business are never done by one person. They're done by a team of people.</q>
                        <p className="author typed">- Steve Jobs</p>
                        <div className="typed-wrap"></div>
                        <button type="button" className="btn btn-primary scroll-link"> <ScrollIntoView selector="#contact">Let's Team Up</ScrollIntoView></button>
                    </div>
                </div>
            </div>
            <div className="arrow-wrap">
            <ScrollIntoView selector="#about"> <i className="arrow down-bounce scroll-link fa fa-angle-double-down"></i></ScrollIntoView>
            </div>
          </div>
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact />
        </div>
    );
  }
}

export default Home;

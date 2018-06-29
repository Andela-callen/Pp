import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ScrollIntoView selector="#home"> <li className="navbar-brand">ACE</li></ScrollIntoView>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <ScrollIntoView selector="#about"> <li className="nav-link"> About </li></ScrollIntoView>
              <ScrollIntoView selector="#skills"> <li className="nav-link"> Skills </li></ScrollIntoView>
              <ScrollIntoView selector="#portfolio"> <li className="nav-link"> Portfolio </li></ScrollIntoView>
              <ScrollIntoView selector="#contact"> <li className="nav-link"> Contact </li></ScrollIntoView>
            </ul>
            <div className="pull-right">
              <a href={process.env.PHONE}><i className="fa fa-phone fa-lg header-icon"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href={process.env.MAILTO}><i className="fa fa-envelope-square fa-lg header-icon"></i></a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

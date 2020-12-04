import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import * as ReactBootStrap from 'react-bootstrap';
function Header(){
    return(
        <>
        <div className="navbar">
        <span className="home">HOME</span>
        <span>Inspection Points</span>
        </div>
        <section className="header-bottom">
      <p>G = Good</p>
      <p>F = Fair</p>
      <p>P = Poor</p>
      </section>
        </>

    )
}

export default Header; 
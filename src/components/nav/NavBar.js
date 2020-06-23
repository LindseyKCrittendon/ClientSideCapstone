import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
// import './logo.jpg'

class NavBar extends Component {

  render(){

    return (
        <>
        {/* <picture>
        <img src={require('./logo.jpg')} alt="Shack Logo" />
      </picture> */}
      <header>
        <h1 className="site-title">S.H.A.C.K.<br />
          <small>Stopping Hunger Among Community Kids</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link draw button" to="/">Home</Link></li>
            <li><Link className="nav-link draw button" to="/login">Login</Link></li>
            <li><Link className="nav-link draw button" to="/updates">Updates</Link></li>
            <li><Link className="nav-link draw button" to="/kids">Meal Requests</Link></li>
          </ul>
        </nav>
      </header>

      </>
    )
  }
}

export default NavBar;
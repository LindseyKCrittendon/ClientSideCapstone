import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">S.H.A.C.K.<br />
          <small>Stopping Hunger Among Community Kids</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/forms">Meal Request</Link></li>
            <li><Link className="nav-link" to="/updates">Updates</Link></li>
            <li><Link className="nav-link" to="/kids">Kids</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;
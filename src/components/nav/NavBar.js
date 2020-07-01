import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './NavBar.css'
// import './logo.jpg'

// this.props.handleLogoutChange()
// TODO:: CREATE LOGOUT FUNCTIONALITY


class NavBar extends Component {
  state = {
    loggedIn: false,
  }

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
            <li><Link className="nav-link tab" to="/">Home</Link></li>
            {!this.props.loggedIn ?
            <li><Link className="nav-link tab" to="/login">Login</Link></li>
          :
          <li className="nav-link tab" onClick={() => {this.props.handleLogoutChange()}}><Link to="/login">Logout</Link></li>
            }
            <li><Link className="nav-link tab" to="/stats">Stats</Link></li>
            <li><Link className="nav-link tab" to="/updates">Updates</Link></li>
            <li><Link className="nav-link tab" to="/kids">Meal Requests</Link></li>
          </ul>
        </nav>
      </header>

      </>
    )
  }
}

export default NavBar;
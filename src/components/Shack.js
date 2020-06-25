import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"

import "./Shack.css"

class Shack extends Component {

  state = {
    // users: [],
    loggedIn: false,
}

handleLoginChange = () =>
this.setState({loggedIn: true})

  render() {
    return (
      <>
        <NavBar 
        loggedIn={this.state.loggedIn}
        />
        <ApplicationViews 
       
        // key={users.id}
        // user={users.id}
        handleLoginChange={this.handleLoginChange}
        />
      </>
    )
  }
}

export default Shack
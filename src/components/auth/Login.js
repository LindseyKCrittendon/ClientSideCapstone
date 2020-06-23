//TODO:: GET FORM TO CLEAR AFTER USER PRESSES SUBMIT
//TODO:: CONDITIONALLY RENDER RATHER THAN CONDITIONALLY ROUTE



import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
    username: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    )
    // this.props.history.push("/users");

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="text"
                    id="username"
                    placeholder="User Name"
                    required="" autoFocus="" />
                <label htmlFor="inputUsername">User Name</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login
import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KidList from './kid/KidList'
import Login from './auth/Login'
import UpdateList from './update/UpdateList'
import KidForm from './kid/KidForm'
import UpdateForm from './update/UpdateForm'
import KidEditForm from './kid/KidEditForm'
import UpdateEditForm from './update/UpdateEditForm'
import Shack from './Shack'



class ApplicationViews extends Component {
     // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    handleLogin = () =>
    this.props({loggedIn: true})

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/login" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Redirect to ="/kids" />
                    }else{
                        // passing down props from Shack.js to login
                    return <Login handleLoginChange={this.props.handleLoginChange}  {...props} />
                    }
                }} />
                <Route exact path="/updates" render={(props) => {
                    return <UpdateList {...props}/>
                }} />
                <Route path="/updates/new" render={(props) => {
                    return <UpdateForm {...props} />
                }} />
                <Route path="/updates/:updateId(\d+)/edit" render={props => {
                    return <UpdateEditForm {...props} />
                }}/>
                <Route exact path="/kids" render={(props) => {
                    if (this.isAuthenticated ()) {
                    return <KidList {...props}/>
                    }else {return <Redirect to ="/kids/new" />
                }
                }} />
                <Route path="/kids/new" render={(props) => {
                    return <KidForm {...props} />
                }} />
                <Route path="/kids/:kidId(\d+)/edit" render={props => {
                    return <KidEditForm {...props} />
                }}/>
            </React.Fragment>
        )
    }
}

export default ApplicationViews
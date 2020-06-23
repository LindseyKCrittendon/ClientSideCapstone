import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KidList from './kid/KidList'
import Login from './auth/Login'
import UpdateList from './update/UpdateList'
import KidForm from './kid/KidForm'
import UpdateForm from './update/UpdateForm'
import KidEditForm from './kid/KidEditForm'
import UpdateEditForm from './update/UpdateEditForm'



class ApplicationViews extends Component {
     // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/login" render={(props) => {
                    return <Login />
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
                    return <KidList {...props}/>
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
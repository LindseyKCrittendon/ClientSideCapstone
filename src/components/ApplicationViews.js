import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KidList from './kid/KidList'
import FormList from './form/FormList'
import UpdateList from './update/UpdateList'
import KidForm from './kid/KidForm'
import UpdateForm from './update/UpdateForm'



class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/forms" render={(props) => {
                    return <FormList />
                }} />
                <Route exact path="/updates" render={(props) => {
                    return <UpdateList {...props}/>
                }} />
                <Route path="/updates/new" render={(props) => {
                    return <UpdateForm {...props} />
                }} />
                <Route exact path="/kids" render={(props) => {
                    return <KidList {...props}/>
                }} />
                <Route path="/kids/new" render={(props) => {
                    return <KidForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
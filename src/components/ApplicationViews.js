import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KidList from './kid/KidList'
import FormCard from './form/FormCard'
import UpdateList from './update/UpdateList'



class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/forms" render={(props) => {
          return <FormCard />
        }} />
         <Route path="/updates" render={(props) => {
          return <UpdateList />
        }} />
         <Route path="/kids" render={(props) => {
          return <KidList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
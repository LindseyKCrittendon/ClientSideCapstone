import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import KidCard from './kid/KidCard'
import FormCard from './form/FormCard'
import UpdateCard from './update/UpdateCard'



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
          return <UpdateCard />
        }} />
         <Route path="/kids" render={(props) => {
          return <KidCard />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Shack from './components/Shack'

ReactDOM.render(
  <Router>
    <Shack />
  </Router>
  , document.getElementById('root'))



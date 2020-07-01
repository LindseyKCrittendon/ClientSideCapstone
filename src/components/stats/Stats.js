import React, { Component } from 'react'
import "./Stats.css"
import LineGraph from "../graph/LineGraph"
import Tables from "../tables/Tables"
import NeighborhoodBar from '../graph/NeighborhoodBar'
import ChildAgePie from '../graph/ChildAgePie'

class Stats extends Component {



    render() {
  //can test with console logs here but not in return
  
      return (
  <>
 
  
  
  {/* CHARTJS GRAPHS */}
  
  
        <LineGraph/>
        <NeighborhoodBar/>
        <ChildAgePie/>
  
  {/* TABLES OF DATA */}
  
        <Tables/>
  
  </>
      )
    }
  }
  
  export default Stats
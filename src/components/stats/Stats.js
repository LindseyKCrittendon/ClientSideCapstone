import React, { Component } from 'react'
import "./Stats.css"
import LineGraph from "../graph/LineGraph"
import Tables from "../tables/Tables"
import NeighborhoodBar from '../graph/NeighborhoodBar'
import ChildAgePie from '../graph/ChildAgePie'
import ChildAgePie2 from '../graph/ChildAgePie2'


class Stats extends Component {



    render() {
  //can test with console logs here but not in return
  
      return (
  <>
 
  
  
  {/* CHARTJS GRAPHS */}
  
  <div className="line-graph">
        <LineGraph/>
        </div>

        <div className="bar-graph">
        <NeighborhoodBar/>
        </div>

        
        <ChildAgePie/>
        <ChildAgePie2/>
  
  {/* TABLES OF DATA */}
  
        <Tables/>
  
  </>
      )
    }
  }
  
  export default Stats
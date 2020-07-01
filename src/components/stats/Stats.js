import React, { Component } from 'react'
import "./Stats.css"
import LineGraph from "../graph/LineGraph"
import Tables from "../tables/Tables"
import NeighborhoodBar from '../graph/NeighborhoodBar'
import ChildAgePie from '../graph/ChildAgePie'
import ChildAgePie2 from '../graph/ChildAgePie2'

//TODO:: WTF IS WRONG WITH THE PIE CHART.  CAN'T FIGURE OUT HOW TO LOOP OVER AGE RANGES WITHOUT BREAKING IT
//TODO:: MOVE INFO TO DIFFERENT COMPONENTS THAT WILL RENDER HERE RATHER THAN HAVE NEVERENDING BLOCKS OF CODE, BECAUSE FUCK.  
//TODO:: POSSIBLY SUCK IT UP AND MAKE THE TABLES/GRAPHS/MAP IT'S OWN THING IN THE NAV BAR
//TODO:: CONDITIONALLY RENDER BETWEEN VISITORS AND USERS, BECAUSE ONLY THE USER SHOULD SEE THE MAP

class Stats extends Component {



    render() {
  //can test with console logs here but not in return
  
      return (
  <>
 
  
  
  {/* CHARTJS GRAPHS */}
  
  
        <LineGraph/>
        <NeighborhoodBar/>
        <ChildAgePie/>
        <ChildAgePie2/>
  
  {/* TABLES OF DATA */}
  
        <Tables/>
  
  </>
      )
    }
  }
  
  export default Stats
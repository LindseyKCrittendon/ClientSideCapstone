import React, { Component } from 'react'
import "./Home.css"
// import LineGraph from "../graph/LineGraph"
// import Tables from "../tables/Tables"
// import NeighborhoodBar from '../graph/NeighborhoodBar'
// import ChildAgePie from '../graph/ChildAgePie'


//TODO:: WTF IS WRONG WITH THE PIE CHART.  CAN'T FIGURE OUT HOW TO LOOP OVER AGE RANGES WITHOUT BREAKING IT
//TODO:: MOVE INFO TO DIFFERENT COMPONENTS THAT WILL RENDER HERE RATHER THAN HAVE NEVERENDING BLOCKS OF CODE, BECAUSE FUCK.  
//TODO:: POSSIBLY SUCK IT UP AND MAKE THE TABLES/GRAPHS/MAP IT'S OWN THING IN THE NAV BAR
//TODO:: CONDITIONALLY RENDER BETWEEN VISITORS AND USERS, BECAUSE ONLY THE USER SHOULD SEE THE MAP

class Home extends Component {



  render() {
//can test with console logs here but not in return

    return (
<>
<address className="address">
        Part of The Underprivileged Children Foundation
        <br />716 Lee Street East, Suite 201 Charleston, WV 25301, USA 
        <br />Phone: 304-807-6227 
</address>
<div className="description-container">
<div className="description">
<h3>Need Help?</h3>
<p>The Underprivileged Children Foundation is proud to announce our launch of S.H.A.C.K.  Our goal is simple.  We aim to stop hunger in West Virginia one county at a time.  We do this by serving children in need of meals thanks to the kindness of members of your community.</p>
<p>We all need help sometimes, and we are here to answer your call.  All you need to do is fill out a Meal Request Form located under Meal Request at the top of this page for the child in need.  You can submit the form for each individual child needing a meal, and you can view our updates under the Updates to see when we will be in your area along with the available menu. </p>

<a  className="button"
   href="https://helpwvkids.org/help-kids-now/" target="_blank" rel="noopener noreferrer"
  >Donate</a>

<a className="button" href="https://helpwvkids.org/volunteer-application/" target ="_blank" rel="noopener noreferrer"
      >Volunteer</a>
</div>
</div>

{/* CHARTJS GRAPHS */}


      {/* <LineGraph/>
      <NeighborhoodBar/>
      <ChildAgePie/> */}

{/* TABLES OF DATA */}

      {/* <Tables/> */}

</>
    )
  }
}

export default Home
import React, { Component } from 'react'
import "./Home.css"
// import { Link } from 'react-router-dom'



class Home extends Component {
  render() {
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
</>
    )
  }
}

export default Home
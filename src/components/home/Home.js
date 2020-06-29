import React, { Component } from 'react'
import "./Home.css"
// import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import KidManager from '../../modules/KidManager'

//TODO:: PRINT REPORTS BY FILTERING AND .LENGTH DATA FROM KIDS ARRAY

class Home extends Component {

  state = {
    kids: [],
}

componentDidMount() {

  //getAll from KidManager and hang on to that data; put it in state
  KidManager.getAll()
      .then((kids) => {
          this.setState({
              kids: kids
          })
      })
}

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
<div className="report-container">
<h3>Meals Served 2020</h3>
<Table striped bordered hover size="lg">
  <thead>
    <tr>
      <th>Month</th>
      <th colSpan="3">Meals Served</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td colSpan="3">{this.state.kids.length}</td>
    </tr>
    <tr>
      <td>February</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>March</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>April</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>May</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>June</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>July</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>August</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>September</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>October</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>November</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>December</td>
      <td colSpan="3"># here</td>
    </tr>
    <tr>
      <td>Total</td>
      <td colSpan="3">{this.state.kids.length}</td>
    </tr>
  </tbody>
</Table>
</div>

<div className="age-container">
  <h3>Children Served by Age</h3>
  <p>(Years)</p>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>0 - 5</th>
      <th>5 - 10 </th>
      <th>10 - 15</th>
      <th>15 - 18</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#</td>
      <td>#</td>
      <td>#</td>
      <td>#</td>
    </tr>
  </tbody>
</Table>
</div>
</>
    )
  }
}

export default Home
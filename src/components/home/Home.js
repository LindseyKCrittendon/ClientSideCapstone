import React, { Component } from 'react'
import "./Home.css"
// import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import KidManager from '../../modules/KidManager'
import {Line} from 'react-chartjs-2'
import LineGraph from "../graph/LineGraph"

//TODO:: UTILIZE CHART.JS TO RENDER DATA INTO GRAPHS

class Home extends Component {

  state = {
    kids: [],
    //LINE GRAPH INFO TO TRACK MEAL REQUESTS BY MONTH
//     labels: ['January', 'February', 'March',
//     'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
// datasets: [
// {
// label: "Meal Requests",
// fill: false,
// lineTension: 0.5,
// backgroundColor: 'rgba(75,192,192,1)',
// borderColor: 'rgba(0,0,0,1)',
// borderWidth: 2,
// data: []
// }
// ]
}

componentDidMount() {

  //getAll from KidManager and hang on to that data; put it in state
  //FOR LOOP HELPS PUSH INFO INTO DATA(STATE) TO PLOT POINTS THAT UPDATE AUTOMAGICALLY IN LINE GRAPH FOR MEAL REQUESTS
  KidManager.getAll()
      .then((kids) => {
        // let data = [];
        // for(let i=0; i<12; i++){
        //  const point = kids.filter(kid => new Date(kid.date).getMonth() === i).length
        //  data.push(point)
        
        // }
        // let copyOfDataSets = this.state.datasets
        // copyOfDataSets[0].data = data
        // console.log(copyOfDataSets)
          this.setState({
              kids: kids,
              // datasets: copyOfDataSets
          
          })
      })
}

  render() {
//can test with console logs here but not in return
// var a = new Date("01/01/2020").getMonth()
// console.log(a)
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
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 0 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>February</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 1 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>March</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 2 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>April</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 3 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>May</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 4 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>June</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 5 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>July</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 6 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>August</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 7 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>September</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 8 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>October</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 9 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>November</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 10 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>December</td>
      <td colSpan="3">{this.state.kids.filter(kid => new Date(kid.date).getMonth() === 11 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td className="total">Total Served</td>
      <td colSpan="3">{this.state.kids.filter(kid => kid.served === true).length}</td>
    </tr>
    <tr>
      <td className="total">Total Requested</td>
      <td colSpan="3">{this.state.kids.length}</td>
    </tr>
    
  </tbody>
</Table>
</div>

<div className="age-container">
  <h3>Children by Age</h3>
  <p>(Years)</p>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Ages</th>
      <th>0 - 5</th>
      <th>6 - 10 </th>
      <th>11 - 15</th>
      <th>16 - 18</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Served</td>
      <td>{this.state.kids.filter(kid => kid.age <= 5 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 6 && kid.age <= 10 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 11 && kid.age <= 15 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 16 && kid.age <= 18 && kid.served === true).length}</td>
    </tr>
    <tr>
      <td>Requests</td>
      <td>{this.state.kids.filter(kid => kid.age <= 5).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 6 && kid.age <= 10).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 11 && kid.age <= 15).length}</td>
      <td>{this.state.kids.filter(kid => kid.age >= 16 && kid.age <= 18).length}</td>
    </tr>
  </tbody>
</Table>
</div>

<div className="neighborhood-container">
  <h3>Meals by Neighborhood</h3>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Meals</th>
      <th>Downtown Charleston</th>
      <th>Switzer Center</th>
      <th>West Side</th>
      <th>Kanawha City</th>
      <th>South Park Village</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Requests</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 1).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 2).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 3).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 4).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 5).length}</td>
    </tr>
    <tr>
      <td>Served</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 1 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 2 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 3 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 4 && kid.served === true).length}</td>
      <td>{this.state.kids.filter(kid => kid.neighborhoodId === 5 && kid.served === true).length}</td>
    </tr>
  </tbody>
</Table>
</div>

{/* CHART JS ATTEMPTS */}
{/* <div className="line-graph">
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Total Meal Requests Per Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div> */}

      <LineGraph/>

</>
    )
  }
}

export default Home
import React, { Component } from 'react'
// import "./Home.css"
// import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import KidManager from '../../modules/KidManager'


//TODO:: UTILIZE CHART.JS TO RENDER DATA INTO GRAPHS
//TODO:: MOVE INFO TO DIFFERENT COMPONENTS THAT WILL RENDER HERE RATHER THAN HAVE NEVERENDING BLOCKS OF CODE, BECAUSE FUCK.

class Tables extends Component {

  state = {
    kids: [],

}

componentDidMount() {

  //getAll from KidManager and hang on to that data; put it in state
 
  KidManager.getAll()
      .then((kids) => {

          this.setState({
              kids: kids,
         
          
          })
      })
}

  render() {
//can test with console logs here but not in return

    return (
<>


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


</>
    )
  }
}

export default Tables
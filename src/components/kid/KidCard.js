import React, { Component } from 'react';
import "./Kid.css"

class KidCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Caregiver Name: <span className="card-caregiverName">{this.props.kid.caregiver}</span></h3>
          <p>Child Age: {this.props.kid.age}</p>
          <p>Neighborhood: {this.props.kid.neighborhoodId}</p>
          <form>
          <label>
           Served:
         <input type="checkbox" name="checkbox"></input>
         </label>
          </form>
        </div>
      </div>
    );
  }
}

export default KidCard;
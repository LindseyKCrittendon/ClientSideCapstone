import React, { Component } from 'react';
import "./Kid.css"


class KidCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Caregiver Name: <span className="card-caregiverName">{this.props.kid.caregiver}</span></h3>
          <p>Child Age: {this.props.kid.age}</p>
          <p>Neighborhood: {this.props.kid.neighborhood.name}</p>
          <form>
          <label>
           Served:
         <input type="checkbox" name="checkbox"></input>
         </label>
          </form>
          <button type="button" className="draw" onClick={() => this.props.deleteKid(this.props.kid.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default KidCard;
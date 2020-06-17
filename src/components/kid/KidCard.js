import React, { Component } from 'react';

class KidCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Caregiver Name: <span className="card-caregiverName">Doodles</span></h3>
          <p>Child Age: Poodle</p>
          <p>Neighborhood: </p>
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
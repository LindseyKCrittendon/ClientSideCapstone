import React, { Component } from 'react';

class UpdateCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Update: <span className="card-update">message goes here</span></h3>
          <p>Date: </p>
          <p>Neighborhood: </p>
        </div>
      </div>
    );
  }
}

export default UpdateCard;
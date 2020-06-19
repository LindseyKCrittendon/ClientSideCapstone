import React, { Component } from 'react';

class UpdateCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Update: <span className="card-update">{this.props.update.message}</span></h3>
          <p>Date: {this.props.update.date}</p>
          <p>Neighborhood: {this.props.update.neighborhood.name}</p>
          <button type="button" className="draw" onClick={() => this.props.deleteUpdate(this.props.update.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default UpdateCard;
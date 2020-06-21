import React, { Component } from 'react';
import Media from 'react-bootstrap/Media'

class UpdateCard extends Component {
  render() {
    return (
      // // <div className="card">
      //   {/* <div className="card-content">
      //     <h3>Update: <span className="card-update">{this.props.update.message}</span></h3>
      //     <p>Date: {this.props.update.date}</p>
      //     <p>Neighborhood: {this.props.update.neighborhood.name}</p>
      //     <button type="button" className="draw" onClick={() => this.props.deleteUpdate(this.props.update.id)}>Delete</button>
      //     <button type="button"
      //     onClick={() => {this.props.history.push(`/updates/${this.props.update.id}/edit`)}}>Edit</button>
      //     </div> */}
      // // </div>
      <>
      <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="../nav/logo.jpg"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h4>{this.props.update.neighborhood.name}</h4>
    <h5>{this.props.update.date}</h5>
    <p>{this.props.update.message}
      
      <button type="button" className="draw" onClick={() => this.props.deleteUpdate(this.props.update.id)}>Delete</button>
          <button type="button"
          onClick={() => {this.props.history.push(`/updates/${this.props.update.id}/edit`)}}>Edit</button>
    </p>
  </Media.Body>
</Media>
</>
    );
  }
}

export default UpdateCard;
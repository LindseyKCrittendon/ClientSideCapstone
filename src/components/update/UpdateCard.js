import React, { Component } from 'react';
import Media from 'react-bootstrap/Media'
import './UpdateCard.css'

class UpdateCard extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
    
      <>
      {
      this.isAuthenticated () ?
      <Media className="update-container">
  <img
    width={64}
    height={64}
    className="mr-3 update-image"
    src="https://scontent.fpit1-1.fna.fbcdn.net/v/t1.0-9/102431553_129269088787529_4903673563250163712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=uezY3OFWPrUAX8Z-47c&_nc_ht=scontent.fpit1-1.fna&oh=4d0a47157cf3d7280021ae86d2dbe466&oe=5F164E8D"
    alt=""
  />
  <Media.Body className="update-content">
    <h5>{this.props.update.neighborhood.name}</h5>
    <p>{this.props.update.date}</p>
    <p>{this.props.update.message}
      
      <button type="button" className="draw" onClick={() => this.props.deleteUpdate(this.props.update.id)}>Delete</button>
          <button type="button"
          onClick={() => {this.props.history.push(`/updates/${this.props.update.id}/edit`)}}>Edit</button>
    </p>
  </Media.Body>
</Media>

:
<Media className="update-container">
  <img
    width={64}
    height={64}
    className="mr-3 update-image"
    src="https://scontent.fpit1-1.fna.fbcdn.net/v/t1.0-9/102431553_129269088787529_4903673563250163712_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=uezY3OFWPrUAX8Z-47c&_nc_ht=scontent.fpit1-1.fna&oh=4d0a47157cf3d7280021ae86d2dbe466&oe=5F164E8D"
    alt=""
    />
  
  <Media.Body className="update-content">
    <h5>{this.props.update.neighborhood.name}</h5>
    <p>{this.props.update.date}</p>
    <p>{this.props.update.message}</p>
    </Media.Body>
</Media>
      }
</>
    );
  }
}

export default UpdateCard;
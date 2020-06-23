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
            {
              //Tests to see if a child has been served and disables button if so.
          this.props.kid.served ?
            
             <p>Served</p>
           :
           <label>
           Served:
         <input type="checkbox" name="checkbox" onChange={() => this.props.served(this.props.kid.id)}></input>
         </label>
  }
          </form>
          <button type="button"
        onClick={() => {this.props.history.push(`/kids/${this.props.kid.id}/edit`)}}>Edit</button>
          <button type="button" className="draw" onClick={() => this.props.deleteKid(this.props.kid.id)}>Delete</button>
        
        </div>
      </div>
    );
  }
}

export default KidCard;
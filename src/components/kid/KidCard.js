import React, { Component } from 'react';
import "./Kid.css"


class KidCard extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <>
      {
      this.isAuthenticated () ?
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
          {this.props.kid.served ?
        //   <button type="button"
        // onClick={() => {this.props.history.push(`/kids/${this.props.kid.id}/edit`)}}>Edit</button> CHANGED MIND AND DON'T WANT PEOPLE TO BE ABLE TO GO BACK AND EDIT SERVED CHILDREN FOR REPORTING LATER
        null
        :
        <>
        <button type="button"
        onClick={() => {this.props.history.push(`/kids/${this.props.kid.id}/edit`)}}>Edit</button>
          <button type="button" className="draw" onClick={() => this.props.deleteKid(this.props.kid.id)}>Delete</button></>
  }
          
        
        </div>
      </div>
      :
      null}
      </>
    );
  }
}

export default KidCard;
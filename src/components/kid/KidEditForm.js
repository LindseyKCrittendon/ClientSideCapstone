import React, { Component } from "react"
import KidManager from "../../modules/KidManager"
import "./KidForm.css"
import Form from 'react-bootstrap/Form'
import NeighborhoodManager from "../../modules/NeighborhoodManager"

// TODO:: CHANGE THE BOOLEAN WITH AN EVENT LISTENER AND REMOVE THE KID FROM THE PAGE...THEN PRINT THE SERVED CHILDREN ON A DIFFERENT PAGE.

class KidEditForm extends Component {
    //set the initial state
    state = {
        caregiver: "",
        age: "",
        neighborhoodId: "",
        neighborhoods: [],
        served: false,
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingKid = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedKid = {
        id: this.props.match.params.kidId,
        caregiver: this.state.caregiver,
        age: this.state.age,
        neighborhoodId: parseInt(this.state.neighborhoodId),
        served: false
      };

      KidManager.update(editedKid)
      .then(() => this.props.history.push("/kids"))
    }

    componentDidMount() {
      KidManager.get(this.props.match.params.kidId)
      .then(kid => {
          this.setState({
            caregiver: kid.caregiver,
            age: kid.age,
            neighborhoodId: kid.neighborhoodId,
            served: false,
            loadingStatus: false,
          });
      });
      NeighborhoodManager.getAll()
      .then((neighborhoods) => {
          this.setState({
              neighborhoods: neighborhoods
          })
      })
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="caregiver"
                value={this.state.caregiver}
              />
              <label htmlFor="caregiver">Caregiver Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="age"
                value={this.state.age}
              />
              <label htmlFor="age">Age</label>
              <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Neighborhood</Form.Label>
                                <Form.Control as="select"  onChange={this.handleFieldChange}
                                id="neighborhoodId">
                                {/* try onchange where select is */}
                                {this.state.neighborhoods.map(neighborhood =>
                                <option value={neighborhood.id}>{neighborhood.name}</option>
                                 )}
                                </Form.Control>
                            </Form.Group>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingKid}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default KidEditForm
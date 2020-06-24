import React, { Component } from "react"
import UpdateManager from "../../modules/UpdateManager"
import "./UpdateForm.css"
import Form from 'react-bootstrap/Form'
import NeighborhoodManager from "../../modules/NeighborhoodManager"

class UpdateEditForm extends Component {
    //set the initial state
    state = {
      date: "",
      message: "",
      neighborhoods: [],
      neighborhoodId: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingUpdate = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUpdate = {
        id: this.props.match.params.updateId,
        message: this.state.message,
        date: this.state.date,
        neighborhoodId: parseInt(this.state.neighborhoodId)
      };

      UpdateManager.update(editedUpdate)
      .then(() => this.props.history.push("/updates"))
    }

    componentDidMount() {
      UpdateManager.get(this.props.match.params.updateId)
      .then(update => {
          this.setState({
            message: update.message,
            date: update.date,
            neighborhoodId: update.neighborhoodId,
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
                id="message"
                value={this.state.message}
              />
              <label htmlFor="message">Message</label>

              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="date"
                value={this.state.date}
              />
              <label htmlFor="date">Date</label>
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
                onClick={this.updateExistingUpdate}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default UpdateEditForm
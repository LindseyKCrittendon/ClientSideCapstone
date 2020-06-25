import React, { Component } from 'react';
import UpdateManager from '../../modules/UpdateManager';
import './UpdateForm.css'
import NeighborhoodManager from '../../modules/NeighborhoodManager'
import Form from 'react-bootstrap/Form'
// TODO:: FIX ISSUES WITH DROPDOWN SELECT.  IF USER DOES NOT CLICK => RETURNS NULL.  REPOPULATES CORRECT VALUE IN EDITING BEHIND THE SCENES BUT NOT VISUALLY FOR THE USER
class UpdateForm extends Component {
    state = {
        truckId: 1,
        message: "",
        neighborhood: "",
        date: "",
        neighborhoods: [],
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount(){
        //getAll from NeighborhoodManager and hang on to that data; put it in state
        NeighborhoodManager.getAll()
        .then((neighborhoods) => {
            this.setState({
                neighborhoods: neighborhoods
            })
        })
    };

    /*  Local method for validation, set loadingStatus, create update object, invoke the UpdateManager post method, and redirect to the full update list
    */
    constructNewUpdate = evt => {
        evt.preventDefault();
        if (this.state.neighborhoodId === "" || this.state.date === "" || this.state.message === "") {
            window.alert("Please input a neighborhood, date, and message");
        } else {
            this.setState({ loadingStatus: true });
            const update = {
                date: this.state.date,
                message: this.state.message,
                neighborhoodId: parseInt(this.state.neighborhoodId),
                truckId: this.state.truckId
            };

            // Create the update and redirect user to update list
            UpdateManager.post(update)
            .then(() => this.props.history.push("/updates"));
        }
    };
// TODO:: ADD INPUT FOR THE NEIGHBORHOODS AND FIGURE OUT HOW TO GET THEM TO POST WITH THE CORRECT ID WITH THE USER ONLY SEEING THE NAME
//MAKE SURE POST SAVES ONCE YOU FIGURE THAT OUT
    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="date"
                        />
                        <label htmlFor="date">Today's Date</label>
                        <input
                        type="text input"
                        required
                        onChange={this.handleFieldChange}
                        id="message"
                        placeholder="Message"
                        />
                        <label htmlFor="message">Message</label>
                        <Form.Group>
                                <Form.Label>Neighborhood</Form.Label>
                                <Form.Control as="select"  onChange={this.handleFieldChange}
                                id="neighborhoodId">
                                {/* try onchange where select is */}
                                {this.state.neighborhoods.map(neighborhood =>
                                <option value={neighborhood.id}>{neighborhood.name}</option>
                                 )}
                                 <option>Choose Neighborhood</option>
                                </Form.Control>
                            </Form.Group>
                    </div>
                    <div className="alignRight draw">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewUpdate}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default UpdateForm
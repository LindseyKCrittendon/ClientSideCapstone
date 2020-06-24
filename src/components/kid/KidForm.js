import React, { Component } from 'react';
import KidManager from '../../modules/KidManager';
import Form from 'react-bootstrap/Form'
import './KidForm.css'
import NeighborhoodManager from '../../modules/NeighborhoodManager'

// TODO:: FIX ISSUES WITH DROPDOWN SELECT.  IF USER DOES NOT CLICK => RETURNS NULL.  REPOPULATES CORRECT VALUE IN EDITING BEHIND THE SCENES BUT NOT VISUALLY FOR THE USER
// TODO:: RETURN CONFIRMATION MESSAGE FOR VISITORS ONCE THEY SUBMIT A MEAL REQUEST

class KidForm extends Component {
    state = {
        caregiver: "",
        age: "",
        neighborhoodId: "",
        neighborhoods: [],
        served: false,
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
    }

    /*  Local method for validation, set loadingStatus, create kid object, invoke the KidManager post method, and redirect to the full Kid list
    */
    constructNewKid = evt => {
        evt.preventDefault();
        if (this.state.caregiver === "" || this.state.age === "" || this.state.neighborhoodId === "") {
            window.alert("Please input a caregiver name, child age, and neighborhood");
        } else {
            this.setState({ loadingStatus: true });
            const kid = {
                caregiver: this.state.caregiver,
                age: this.state.age,
                neighborhoodId: parseInt(this.state.neighborhoodId),
                served: false
            };

            // Create the child and redirect user to kid list
            KidManager.post(kid)
                .then(() => this.props.history.push("/kids"));
        }
    };

    render() {

        //TODO FIGURE OUT HOW TO GET THE EVENT LISTENER ON THE DROP DOWNS

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="caregiver"
                                placeholder="Caregiver name"
                            />
                            <label htmlFor="caregiver">Caregiver Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="age"
                                placeholder="Child's Age"
                            />
                            <label htmlFor="age">Age</label>
                            <Form.Group>
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
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewKid}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default KidForm
import React, { Component } from 'react';
import KidManager from '../../modules/KidManager';
import Form from 'react-bootstrap/Form'
import './KidForm.css'
// TODO:: COLLECT NEIGHBORHOOD ID BY NEIGHBORHOOD SELECTION IN FORM

class KidForm extends Component {
    state = {
        caregiver: "",
        age: "",
        neighborhood: "",
        served: false,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create kid object, invoke the KidManager post method, and redirect to the full Kid list
    */
    constructNewKid = evt => {
        evt.preventDefault();
        if (this.state.caregiver === "" || this.state.age === "" || this.state.neighborhood === "") {
            window.alert("Please input a caregiver name, child age, and neighborhood");
        } else {
            this.setState({ loadingStatus: true });
            const kid = {
                caregiver: this.state.caregiver,
                age: this.state.age,
                neighborhood: this.state.neighborhoodId
            };

            // Create the child and redirect user to kid list
            KidManager.post(kid)
                .then(() => this.props.history.push("/kids"));
        }
    };

    render() {

        //TODO FIGURE OUT HOW TO POST NEIGHBORHOOD ID BY NEIGHBORHOOD NAME ON THE FORM.  FIGURE OUT HOW TO GET THE EVENT LISTENER ON THE DROP DOWNS

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
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Neighborhood</Form.Label>
                                <Form.Control as="select">
                                    <option>Downtown Charleston</option>
                                    <option>Switzer Center</option>
                                    <option>West Side</option>
                                    <option>Kanawha City</option>
                                    <option>South Park Village</option>
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
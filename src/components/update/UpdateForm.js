import React, { Component } from 'react';
import UpdateManager from '../../modules/UpdateManager';
import './UpdateForm.css'

class UpdateForm extends Component {
    state = {
        truckId: 1,
        message: "",
        neighborhood: "",
        date: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create update object, invoke the UpdateManager post method, and redirect to the full update list
    */
    constructNewUpdate = evt => {
        evt.preventDefault();
        if (this.state.neighborhood === "" || this.state.date === "" || this.state.message === "") {
            window.alert("Please input a neighborhood, date, and message");
        } else {
            this.setState({ loadingStatus: true });
            const update = {
                date: this.state.date,
                message: this.state.message,
                neighborhood: this.state.neighborhoodId,
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
                    </div>
                    <div className="alignRight">
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
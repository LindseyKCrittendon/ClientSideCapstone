import React, { Component } from 'react';
import "./Kid.css"

//

class ConfirmationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">

                    <h3>Thank You!</h3>
                    <p>Your meal request has been received.</p>
                    <p>What would you like to do?</p>
                    <button type="button" className="btn"
                        onClick={() => { this.props.history.push("/kids/new") }}
                    >
                        Add Another Request
                    </button>
                    <button type="button" className="btn"
                        onClick={() => { this.props.history.push("/updates") }}
                    >
                        View Updates
                    </button>


                </div>
            </div>
        );
    }
}

export default ConfirmationCard;
import React, { Component } from 'react'
//import the components we will need
import UpdateCard from './UpdateCard'
import UpdateManager from '../../modules/UpdateManager'
import './UpdateCard.css'

//TODO:  WORK ON CONDITIONAL RENDERING AFTER LOGIN WORKING, AND ALLOW VISITORS TO SEE UPDATE WITH A DROPDOWN MENU TO VIEW UPDATES BY NEIGHBORHOOD

class UpdateList extends Component {
    //define what this component needs to render
    state = {
        updates: [],
    }

    deleteUpdate = id => {
        UpdateManager.delete(id)
            .then(() => {
                UpdateManager.getAll()
                    .then((newUpdates) => {
                        this.setState({
                            updates: newUpdates
                        })
                    })
            })
    }

    componentDidMount() {

        //getAll from UpdateManager and hang on to that data; put it in state
        UpdateManager.getAll()
            .then((updates) => {
                this.setState({
                    updates: updates
                })
            })
    }

    render() {


        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn draw"
                        onClick={() => { this.props.history.push("/updates/new") }}>
                        New Update
                    </button>
                    
                </section>
                <div className="container-cards">
                    {this.state.updates.map(update =>
                        <UpdateCard
                            key={update.id}
                            update={update}
                            deleteUpdate={this.deleteUpdate}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default UpdateList
import React, { Component } from 'react'
//import the components we will need
import UpdateCard from './UpdateCard'
import UpdateManager from '../../modules/UpdateManager'
import './UpdateCard.css'




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
                    updates: updates.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
                })
            })
    }

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {

        
        return (
            <>
            {this.isAuthenticated() ?
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
                :
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
    }
           </> 
        )
    }
}

export default UpdateList
import React, { Component } from 'react'
//import the components we will need
import UpdateCard from './UpdateCard'
import UpdateManager from '../../modules/UpdateManager'

class UpdateList extends Component {
    //define what this component needs to render
    state = {
        updates: [],
    }

componentDidMount(){
    
    //getAll from UpdateManager and hang on to that data; put it in state
    UpdateManager.getAll()
    .then((updates) => {
        this.setState({
            updates: updates
        })
    })
}

render(){
    

    return(
        <div className="container-cards">
            {this.state.updates.map(update => <UpdateCard />)}
        </div>
    )
}
}

export default UpdateList
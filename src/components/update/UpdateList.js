import React, { Component } from 'react'
//import the components we will need
import UpdateCard from './UpdateCard'
import UpdateManager from '../../modules/UpdateManager'
//TODO:  GET CORRECT NEIGHBORHOOD NAME TO PRINT WITH UPDATE

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
        {this.state.updates.map(update =>
          <UpdateCard
            key={update.id}
            update={update}
            deleteUpdate={this.deleteUpdate}
          />
        )}
      </div>
    )
  }
}

export default UpdateList
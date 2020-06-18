import React, { Component } from 'react'
//import the components we will need
import FormCard from './FormCard'
import NeighborhoodManager from '../../modules/NeighborhoodManager'

class FormList extends Component {
    //define what this component needs to render
    state = {
        neighborhoods: [],
    }

componentDidMount(){
    //getAll from NeighborhoodManager and hang on to that data; put it in state
    NeighborhoodManager.getAll()
    .then((neighborhoods) => {
        this.setState({
            neighborhoods: neighborhoods
        })
    })
}

render(){
    console.log("Neighborhood LIST: Render");

    return(
        <div className="container-cards">
            {/* You just want to insert the array of neighborhood objects into your drop box in FormCard rather than looping through each individual neighborhood causing the form to reprint for every neighborhood. */}
             <FormCard  neighborhoods={this.state.neighborhoods} />
       
      </div>
    )
}
}

export default FormList
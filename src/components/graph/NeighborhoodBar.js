import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';
import KidManager from '../../modules/KidManager'



class NeighborhoodBar extends Component {
        state = {
  labels: ['Downtown Charleston', 'Switzer Center', 'West Side',
           'Kanawha City', 'South Park Village'],
  datasets: [
    {
      label: 'Meals Requested',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: []
    }
  ]
}

componentDidMount() {

    //getAll from KidManager and hang on to that data; put it in state
    //FOR LOOP HELPS PUSH INFO INTO DATA(STATE) TO PLOT POINTS THAT UPDATE AUTOMAGICALLY IN LINE GRAPH FOR MEAL REQUESTS
    KidManager.getAll()
        .then((kids) => {
          let data = [];
          for(let i=1; i< 1000; i++){
           const point = kids.filter(kid => kid.neighborhoodId === i).length
           data.push(point)
          
          }
          let copyOfDataSets = this.state.datasets
          copyOfDataSets[0].data = data
          console.log(copyOfDataSets)
            this.setState({
                datasets: copyOfDataSets
            
            })
        })
  }


  render() {
    return (
      <div>
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Meals by Neighborhood',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export default NeighborhoodBar
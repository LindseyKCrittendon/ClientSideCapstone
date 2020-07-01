
// import KidManager from '../../modules/KidManager'
import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';
import KidManager from '../../modules/KidManager'

//TODO:: FIGURE OUT HOW TO RUN LOOP THROUGH SEVERAL CONDITIONS TO DISPLAY DATA BY AGE RANGE

class ChildAgePie extends Component {

state = {
  labels: ['0-5', '6-10', '11-15',
           '16-18'],
  datasets: [
    {
      label: 'Meals Requested',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350'
      ],
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
           const point1 = kids.filter(kid => kid.age <= 5).length
           data.push(point1)
          }
          for(let i=1; i< 1000; i++){
            const point2 = kids.filter(kid => kid.age >= 6 && kid.age <= 10).length
            data.push(point2)
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
        <Pie
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Meals by Age Group (years)',
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

export default ChildAgePie
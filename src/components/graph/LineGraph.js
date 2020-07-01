import React, { Component } from 'react'
import KidManager from '../../modules/KidManager'
import { Line } from 'react-chartjs-2'

class LineGraph extends Component {

    state = {
        //LINE GRAPH INFO TO TRACK MEAL REQUESTS BY MONTH
        labels: ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: "Meal Requests",
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(140, 136, 139, 0.5)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: []
            },
            {
              label: "Meals Served",
              fill: true,
              lineTension: 0.5,
              backgroundColor: 'rgba(59, 3, 43)',
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
              for(let i=0; i<12; i++){
               const point = kids.filter(kid => new Date(kid.date).getMonth() === i).length
               data.push(point)
              }
              let copyOfDataSets = this.state.datasets
              copyOfDataSets[0].data = data
              console.log(copyOfDataSets)
                this.setState({
                    datasets: copyOfDataSets
                
                })
            }) 
            KidManager.getAllServed()
            .then((kids) => {
              let data = [];
              for(let i=0; i<12; i++){
                const point = kids.filter(kid => new Date(kid.date).getMonth() === i).length
                data.push(point)
            }
            let copyOfDataSets = this.state.datasets
            copyOfDataSets[1].data = data
            this.setState({
              datasets: copyOfDataSets
            })
            })
          }

render () {

    return(

    <div className="line-graph">
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Total Meal Requests Per Month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    )
}

}

export default LineGraph
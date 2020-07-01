import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2';
import KidManager from '../../modules/KidManager'

//TODO:: FIGURE OUT HOW TO RUN LOOP THROUGH SEVERAL CONDITIONS TO DISPLAY DATA BY AGE RANGE

class ChildAgePie2 extends Component {

    state = {
        labels: ['Age 0-5', 'Age 6-10', 'Age 11-15',
            'Age 16-18'],
        datasets: [
            {
                label: 'Meals Requested',
                backgroundColor: [
                    '#4e0250',
                    '#645986',
                    '#58bc82',
                    '#8fe388'
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
        KidManager.getAllServed()
            .then((kids) => {
                let data = [];

                const point1 = kids.filter(kid => kid.age <= 5).length
                data.push(point1)

                const point2 = kids.filter(kid => kid.age >= 6 && kid.age <= 10).length
                data.push(point2)

                const point3 = kids.filter(kid => kid.age >=11 && kid.age <= 15).length
                data.push(point3)

                const point4 = kids.filter(kid => kid.age >= 16 && kid.age <= 18).length
                data.push(point4)

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
                        title: {
                            display: true,
                            text: 'Meals Served by Age Group (years)',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default ChildAgePie2
import React, { Component } from 'react'
    import KidCard from './KidCard'
    import KidManager from '../../modules/KidManager'

    class KidList extends Component {
        //define what this component needs to render
        state = {
            kids: [],
        }

    componentDidMount(){
        
        //getAll from KidManager and hang on to that data; put it in state
        KidManager.getAll()
        .then((kids) => {
            this.setState({
                kids: kids
            })
        })
    }

    render(){
    
  
        return(
          <div className="container-cards">
            {this.state.kids.map(kid =>
              <KidCard key={kid.id} kid={kid} />
            )}
          </div>
        )
      }
}

export default KidList
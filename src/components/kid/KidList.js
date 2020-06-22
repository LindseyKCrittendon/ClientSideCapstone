import React, { Component } from 'react'
import KidCard from './KidCard'
import KidManager from '../../modules/KidManager'



// TODO:: CONDITIONALLY RENDER ITEMS IN VIEW DEPENDING ON LOGIN



class KidList extends Component {
    //define what this component needs to render
    state = {
        kids: [],
        showServedKids: false,
    }

    deleteKid = id => {
        KidManager.delete(id)
            .then(() => {
                KidManager.getAll()
                    .then((newKids) => {
                        this.setState({
                            kids: newKids
                        })
                    })
            })
    }

    componentDidMount() {

        //getAll from KidManager and hang on to that data; put it in state
        KidManager.getAll()
            .then((kids) => {
                this.setState({
                    kids: kids
                })
            })
    }

    served = id => {
        KidManager.served(id)
        .then(KidManager.getAll)
          .then((newKids) => {
            this.setState({
                kids: newKids
            })
          })
         
    }


    render() {


        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn draw"
                        onClick={() => { this.props.history.push("/kids/new") }}>
                        Add Meal Request
                    </button>
                    <button type="button" className="btn" onClick={() => {this.setState({showServedKids: !this.state.showServedKids})}}
                    >View Served</button>
                </section>
                <div className="container-cards">
                    {this.state.kids.map(kid =>
                    !kid.served & !this.state.showServedKids ?
                    <KidCard
                            key={kid.id}
                            kid={kid}
                            deleteKid={this.deleteKid}
                            served={this.served}
                           
                            {...this.props}
                        />
                    :
                    kid.served & this.state.showServedKids ?
                            <KidCard
                            key={kid.id}
                            kid={kid}
                            deleteKid={this.deleteKid}
                            served={this.served}
                   
                            {...this.props}
                    />
                    :
                       null
                        
                    )}
                    
                </div>
            </>
        )
    }
}

export default KidList
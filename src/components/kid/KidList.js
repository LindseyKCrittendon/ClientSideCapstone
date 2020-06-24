import React, { Component } from 'react'
import KidCard from './KidCard'
import KidManager from '../../modules/KidManager'



// TODO:: CHANGE NAME OF TOGGLE BUTTON WHEN CLICKED



class KidList extends Component {
    //define what this component needs to render
    // added another property to state to allow me to test with a conditional and render a different state.
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

    isAuthenticated = () => localStorage.getItem("credentials") !== null


    render() {


        return (
            <>
            {
                this.isAuthenticated() ?
<>
                <section className="section-content">
                    <button type="button"
                        className="btn draw"
                        onClick={() => { this.props.history.push("/kids/new") }}>
                        Add Meal Request
                    </button>
                    {/* button to toggle between served and unserved children */}
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
                :
                <section className="section-content">
                <button type="button"
                    className="btn draw"
                    onClick={() => { this.props.history.push("/kids/new") }}>
                    Add Meal Request
                </button>
              
            </section>
    }
            </>
        )
    }
}

export default KidList
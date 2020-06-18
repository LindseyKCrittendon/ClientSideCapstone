import React, { Component } from 'react'
import KidCard from './KidCard'
import KidManager from '../../modules/KidManager'
import './KidList.css'
// import NeighborhoodManager from '../../modules/NeighborhoodManager'
// TODO:  GET NEIGHBORHOOD NAME TO PRINT WITH THE CORRECT CHILD

class KidList extends Component {
    //define what this component needs to render
    state = {
        kids: [],
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

    render() {


        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn draw"
                        onClick={() => { this.props.history.push("/kids/new") }}>
                        Add Kid
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.kids.map(kid =>
                        <KidCard
                            key={kid.id}
                            kid={kid}
                            deleteKid={this.deleteKid}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default KidList
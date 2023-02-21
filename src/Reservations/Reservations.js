import React, { Component } from 'react'
import Card from '../Card/Card'
import './Reservations.css'

class Reservations extends Component {
    constructor() {
        super()
        this.state = {
            reservations: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:3001/api/v1/reservations')
        .then(res => res.json())
        .then(data => {
            this.setState({
                reservations: data
            })
        })
    }
    createReservations() {
        console.log("createReservations ran")
        let reservationCards = this.state.reservations.map(resy => 
                <Card 
                name={resy.name}
                date={resy.date}
                time={resy.time}
                guests={resy.number}
                />
            
        )
        return reservationCards
    }

    render() {
        // let reservationCards = this.State.reservations.map(resy => {
        //     console.log('we hit the map')
        //     return (
        //         <Card 
        //         name={resy.name}
        //         date={resy.name}
        //         time={resy.time}
        //         guests={resy.number}
        //         />
        //     )
        // })
        return (
        <div className='reservations-container'>
            {this.createReservations()}
        </div>)
    }
}


export default Reservations
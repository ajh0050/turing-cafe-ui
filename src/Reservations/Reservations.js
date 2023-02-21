import React, { Component } from 'react'
import Card from '../Card/Card'
import './Reservations.css'

class Reservations extends Component {
    constructor() {
        super()
    }

    createReservations() {
        console.log("createReservations ran")
        console.log(this.props, "this.props")
        let reservationCards = this.props.reservations.map(resy => 
                <Card 
                name={resy.name}
                date={resy.date}
                time={resy.time}
                number={resy.number}
                />
            
        )
        return reservationCards
    }

    render() {
        return (
        <div className='reservations-container'>
            {this.createReservations()}
        </div>)
    }
}


export default Reservations
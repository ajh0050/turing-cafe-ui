import React, { Component } from 'react'

class Reservations extends Component {
    constructor() {
        super()
        this.setState = {
            reservations: []
        }
    }
    componentDidMount() {
        
    }
    render() {
        return (
        <div className='Reservations-container'>
            <h1>Reservations container</h1>
        </div>)
    }
}


export default Reservations
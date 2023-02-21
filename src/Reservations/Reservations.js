import React, { Component } from 'react'

class Reservations extends Component {
    constructor() {
        super()
        this.State = {
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
    render() {
        return (
        <div className='Reservations-container'>
            <h1>Reservations container</h1>
        </div>)
    }
}


export default Reservations
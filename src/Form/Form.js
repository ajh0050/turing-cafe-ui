import React, { Component } from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state= {
            name:"",
            date:"",
            time:"",
            number:"",
        }
    }
    handleChange = (event) => {
        console.log(event.target.value,'e.t.v', typeof event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addReservation(this.state)
    }
    render(){
        return(
            <form>
                <label for="name"> Name: </label>
                <input type="text" name="name" value={this.state.name} placeholder="name" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <label for="date">Date: </label>
                <input type="date" name="date" value={this.state.date} placeholder="date" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <label for="time">Time: </label>
                <input type="text" name="time" value={this.state.time} placeholder="time" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <label for="guests">Guests: </label>
                <input type="number" name="number" value={this.state.number} placeholder="number of guests" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <button onClick={this.handleSubmit}>submit</button>
            </form>
        )
    }
}

export default Form
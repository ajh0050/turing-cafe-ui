import React, { Component } from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state= {
            name:"",
            date:"",
            time:"",
            guests:0,
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
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
                <input type="number" name="guests" value={this.state.guests} placeholder="number of guests" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <button>submit</button>
            </form>
        )
    }
}

export default Form
import React, { Component } from 'react'
import './Form.css'
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
                <input className="form-item" type="text" name="name" value={this.state.name} placeholder="name" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <input className="form-item" type="date" name="date" value={this.state.date} placeholder="date" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <input className="form-item" type="text" name="time" value={this.state.time} placeholder="time" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <input className="form-item" type="number" name="number" value={this.state.number} placeholder="number of guests" onChange={(event) => this.handleChange(event)} ></input>
                <br />
                <button className="form-item form-submit" onClick={this.handleSubmit}>submit</button>
            </form>
        )
    }
}

export default Form
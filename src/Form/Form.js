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
    onChange = (event) => {
        
    }
    render(){
        return(
            <form>
                <label for="name">Name: </label>
                <input type="text" placeholder="name" ></input>
                <br />
                <label for="date">Name: </label>
                <input type="text" placeholder="date" ></input>
                <br />
                <label for="time">Name: </label>
                <input type="text" placeholder="time" ></input>
                <br />
                <label for="guests">Name: </label>
                <input type="number" placeholder="number of guests" ></input>
                <br />
                <button>submit</button>
            </form>
        )
    }
}

export default Form
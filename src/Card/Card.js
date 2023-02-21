import React from 'react'
import './Card.css'

function Card ({name,date,time,guests}){
    return (
        <div className='card'>
            <h2 className='card-info'>{name}</h2>
            <p className='card-info'>{date}</p>
            <p className='card-info'>{time} p.m.</p>
            <p className='card-info'>Number of guests: {guests}</p>
            <button className='cancel-button'>Cancel</button>
        </div>
    )
}

export default Card
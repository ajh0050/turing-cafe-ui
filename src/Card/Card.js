import React from 'react'

function Card ({name,date,time,guests}){
    return (
        <div>
            <h2>{name}</h2>
            <h3>{date}</h3>
            <h3>{time} p.m.</h3>
            <h3>Number of guests: {guests}</h3>
        </div>
    )
}

export default Card
import React from 'react'
import {B} from './laberinto.jsx'

const Pared = ({x,y}) =>{

    const style = {
        width: `5px`,
        height: `5px`,
        background: 'green',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Pared
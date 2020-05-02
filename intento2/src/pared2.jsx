import React from 'react'
import {B} from './laberinto.jsx'

const Pared2 = ({x,y}) =>{

    const style = {
        width: `5px`,
        height: `5px`,
        background: 'pink',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Pared2
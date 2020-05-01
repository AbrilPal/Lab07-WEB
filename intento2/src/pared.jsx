import React from 'react'
import {B} from './laberinto.jsx'

const Pared = ({x,y}) =>{

    const style = {
        width: `${B}px`,
        height: `${B}px`,
        background: 'blue',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Pared
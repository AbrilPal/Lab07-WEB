import React from 'react'
import {B} from './laberinto.jsx'

const Pared3 = ({x,y}) =>{

    const style = {
        width: `8px`,
        height: `8px`,
        background: 'blue',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Pared3
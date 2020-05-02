import React from 'react'

const Meta = ({x,y}) =>{

    const style = {
        width: `8px`,
        height: `8px`,
        background: 'red',
        gridColumnStart: x+1,
        gridRowStart: y+1
    }
    return (
    <div style={style}></div>
    )
}

export default Meta
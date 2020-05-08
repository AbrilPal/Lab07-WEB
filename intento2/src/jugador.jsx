import React from 'react'

const Jugador = ({ x, y }) => {
    const style = {
        width: `8px`,
        height: `8px`,
        background: 'yellow',
        borderRadius: '100%',
        gridColumnStart: x + 1,
        gridRowStart: y + 1
    }
    return (
    <div style={ style }></div>
    )
}
export default Jugador
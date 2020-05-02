import React, { useEffect } from 'react'
import Pared from './pared.jsx'
import Pared2 from './pared2.jsx'
import Pared3 from './pared3.jsx'
import Jugador from './jugador.jsx'
import Meta from './meta.jsx'

const WIDTH = 20
const HEIGHT = 20
const B = 10

const Laberinto = () => {
    const [laberinto,setLaberinto]=React.useState([])
    useEffect(() => {
        fetch(`http://quetzaluno.space:3001/?w=${WIDTH}&h=${HEIGHT}&type=json`).then(
            (response) => {
                return response.json()
            }
        ).then(
            (response) => {
                setLaberinto(response)
            }
        )
        
    },[])

    const style={
        marginTop: '100px',
        marginLeft: '310px',
        width: `${((WIDTH+1)+(WIDTH*2))*B}px`,
        height: `${((HEIGHT+1)+(HEIGHT))*B}px`,
        background: 'black',
        display: 'grid',
        gridTemplate: `repeat(${(WIDTH+1)+(WIDTH*2)},${B}px)/repeat(${(HEIGHT+1)+(HEIGHT)},${B}px)`
    } 

    return (
    <div style={style}>
        {laberinto.map((row,rowIndex)=>{
            return row.map((column,columnIndex)=>{
                if(column === '+') {
                    return <Pared key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === '-' ){
                    return <Pared2 key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === '|'){
                    return <Pared3 key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === 'p'){
                    return <Jugador key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === 'g'){
                    return <Meta key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }
                else {
                    return null
                }
                
                
            })
            })}
         </div>
    )
}

export default Laberinto
export {B}
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
    const [jugadorX, setjugadorX]=React.useState(1)
    const [jugadorY, setjugadorY]=React.useState(1)
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

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
          if (laberinto[jugadorY][jugadorX + 1] === ' ' || laberinto[jugadorY][jugadorX + 1] === 'p' || laberinto[jugadorY][jugadorX + 1] === 'g') {
            setjugadorX(jugadorX + 1)
          }
        }
        else if (e.key === 'ArrowLeft') {
          if (laberinto[jugadorY][jugadorX - 1] === ' ' || laberinto[jugadorY][jugadorX - 1] === 'p' || laberinto[jugadorY][jugadorX - 1] === 'g') {
            setjugadorX(jugadorX - 1)
          }
        }
        else if (e.key === 'ArrowUp') {
          if (laberinto[jugadorY - 1][jugadorX] === ' ' || laberinto[jugadorY - 1][jugadorX] === 'p' || laberinto[jugadorY - 1][jugadorX] === 'g') {
            setjugadorY(jugadorY - 1)
          }
        }
        else if (e.key === 'ArrowDown') {
          if (laberinto[jugadorY + 1][jugadorX] === ' ' || laberinto[jugadorY + 1][jugadorX] === 'p' || laberinto[jugadorY + 1][jugadorX] === 'g') {
            setjugadorY(jugadorY + 1)
          }
        }
      }

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
    <div style={style} onKeyDown={handleKeyDown} tabIndex="0">
        <Jugador x={jugadorX} y={jugadorY} />
        {laberinto.map((row,rowIndex)=>{
            return row.map((column,columnIndex)=>{
                if(column === '+') {
                    return <Pared key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === '-' ){
                    return <Pared2 key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === '|'){
                    return <Pared3 key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else if(column === 'g'){
                    return <Meta key={`${rowIndex}-${columnIndex}`} x={columnIndex} y={rowIndex}/>
                }else {
                    return null
                }
                
                
            })
            })}
         </div>
    )
}

export default Laberinto
export {B}
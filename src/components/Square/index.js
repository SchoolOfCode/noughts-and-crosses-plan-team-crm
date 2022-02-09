import React from 'react'
import './style.css'

const style = {
    width: "100px",
    height: "100px",
    border: "2px solid black"
}

const Square = ({move, sign, i}) => {
    return (
        <div className='btn-wrapper'>
        <button style={style} onClick={()=>{move(i)}}>
            {sign ? sign : ''}
        </button>
        </div>
    )
}

export default Square
import React from 'react'
import dice from "./icon-dice.svg"

export default function Component2(props) {
    return (


        <button onClick={props.grab} className='flex items-center justify-center w-16 h-16 rounded-full bg-Gr-100 sh'>
            <img src={dice} />
        </button>

    )
}

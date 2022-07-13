import React from 'react'
import Component2 from './Component2'
import pattern from './pattern-divider-desktop.svg'

export default function Component1(props) {
    return (
        <div className='flex flex-col items-center justify-between w-2/6 p-10 bg-Bl-200 h-2/5 rounded-xl min-w-[500px] min-h-[300px]'>

            <span className='font-bold tracking-widest text-Gr-100 '>ADVICE #{props.id}</span>
            <span className='p-5 text-2xl font-bold text-white'>{props.advice}</span>

            <img className='m-8' src={pattern} />

            <div className=''>
                <Component2 grab={props.grab} />
            </div>

        </div>
    )
}

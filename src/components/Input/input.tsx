import React from 'react'
import './input.css'

export default function Input({type, placeh, classname}:{type:string, placeh:string, classname:string}) {
    return(
        <>
            <input className={classname} type={type} placeholder={placeh} />
        </>
    )
}
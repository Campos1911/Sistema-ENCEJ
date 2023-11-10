import React from 'react'
import './button.css'

export default function Button({classname, insideText}:{classname:string, insideText:string}) {
    return(
        <>
            <button className={classname}>{insideText}</button>
        </>
    )
}
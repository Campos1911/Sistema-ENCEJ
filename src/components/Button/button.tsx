import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom'



export default function Button({classname, insideText, caminho}:{caminho:string, classname:string, insideText:string}) {
    
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        return navigate(`/${caminho}`)
    }


    return(
        <>
            <button className={classname} onClick={handleRedirect}>{insideText}</button>
        </>
    )
}
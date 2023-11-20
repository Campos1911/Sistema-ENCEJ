import React from "react";
import EncejPdd from "../../images/Logo padding/Logo - padding.jpg";
import "./style.css"
import { useNavigate } from "react-router-dom";

import Avatar from "../../images/Organizadores/Avatar.jpg"


export default function Header({caminho, username, empresaJ}:{caminho:string, username:string, empresaJ:string}) {
    
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        return navigate(`/${caminho}`)
    }
    
    return (
    <>

    <header className="header1Mob">

        <div className="boxUserMob">
            <img onClick={handleRedirect} className="fotoUserMob" src={Avatar} alt="Foto de Perfil" />
            <div className="columInfosMob">
                <h1>{username}</h1>
                <p>{empresaJ}</p>
            </div>
        </div>

    </header>   
    </>
    );
}
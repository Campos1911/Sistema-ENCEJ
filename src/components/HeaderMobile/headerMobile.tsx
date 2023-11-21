import React from "react";
import EncejPdd from "../../images/Logo padding/Logo - padding.jpg";
import "./style.css"
import { useNavigate } from "react-router-dom";

import Avatar from "../../images/Organizadores/Avatar.jpg"


export default function HeaderMobile({caminho, username, empresaJ}:{caminho:string, username:string, empresaJ:string}) {
    
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        return navigate(`/${caminho}`)
    }
    
    return (
    <>
    <header className="header2">

        <div className="boxUser2">
            <img onClick={handleRedirect} className="fotoUser2" src={Avatar} alt="Foto de Perfil" />
            <div className="columInfos2">
                <h1>{username}</h1>
                <p>{empresaJ}</p>
            </div>
        </div>

    </header>   
    </>
    );
}
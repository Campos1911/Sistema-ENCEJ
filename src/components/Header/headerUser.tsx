import React from "react";
import EncejPdd from "../../images/Logo padding/Logo - padding.jpg";
    import "./headerUser.css"
import { useNavigate } from "react-router-dom";

import Avatar from "../../images/Organizadores/Avatar.jpg"


export default function Header({caminho, username, empresaJ}:{caminho:string, username:string, empresaJ:string}) {
    
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        return navigate(`/${caminho}`)
    }
    
    return (
    <>

    <header className="headerDesktop">

        <div className="boxUserDesktop">
            <img onClick={handleRedirect} className="fotoUserDesktop" src={Avatar} alt="Foto de Perfil" />
            <div className="columInfosDesktop">
                <h1>{username}</h1>
                <p>{empresaJ}</p>
            </div>
        </div>

        <div className="box-logo">
            <img className="logoEncejHeaderDesktop" src={EncejPdd} alt="Logo Encej" />
        </div>

    </header>   
    </>
    );
}
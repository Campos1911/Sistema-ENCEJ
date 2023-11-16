import React from "react";
import Encej from "../../images/Logo/Logo.jpg";
import "./style.css"

import Avatar from "../../images/Organizadores/Avatar.jpg"


export default function Header({username, empresaJ}:{username:string, empresaJ:string}) {
    return (
    <>
    <header className="header1">

        <div className="boxUser">
            <img className="fotoUser" src={Avatar} alt="Foto de Perfil" />
            <div className="columInfos">
                <h1>{username}</h1>
                <p>{empresaJ}</p>
            </div>
        </div>

        <div className="box-logo">
            <img className="logoEncej" src={Encej} alt="Logo Encej" />
        </div>

    </header>   
    </>
    );
}
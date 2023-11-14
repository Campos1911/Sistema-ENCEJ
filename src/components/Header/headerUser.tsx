import React from "react";
import Encej from "../../images/Logo/Logo.jpg";
import "./style.css"


export default function Header() {
    return (
    <>
    <header className="header1">

        <div className="boxUser">
            <img className="fotoUser" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto de Perfil" />
            <div className="columInfos">
                <h1>Carlos R. Guimarães</h1>
                <p>CT Junior</p>
            </div>
        </div>

        <div className="box-logo">
            <img className="logoEncej" src={Encej} alt="Logo Encej" />
        </div>

    </header>   
    </>
    );
}
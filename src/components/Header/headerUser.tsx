import React from "react";
import EncejPdd from "../../images/Logo padding/Logo - padding.jpg";
import "./style.css"
import { useNavigate } from "react-router-dom";


export default function Header({caminho, username, empresaJ}:{caminho:string, username:string, empresaJ:string}) {
    
    const navigate = useNavigate();
    
    const handleRedirect = () => {
        return navigate(`/${caminho}`)
    }
    
    return (
    <>

    <header className="header1">

        <div className="boxUser">
            <img onClick={handleRedirect} className="fotoUser" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Foto de Perfil" />
            <div className="columInfos">
                <h1>{username}</h1>
                <p>{empresaJ}</p>
            </div>
        </div>

        <div className="box-logo">
            <img className="logoEncejHeader" src={EncejPdd} alt="Logo Encej" />
        </div>

    </header>   
    </>
    );
}
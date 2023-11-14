import React from "react";
import './style.css'

import Encej from '../../images/Logo/Logo.jpg';
import Legenda from '../../images/Legenda/Legenda.png'
import Button from "../../components/Button/button";

export default function SelecQuarto() {
    return(
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
        
        <section className="boxLegenda">
            <img className="legenda" src={Legenda} alt="legendaQuartos" />
        </section>

        <div className="selecCapacidade">
            <h2>Selecione a capacidade do quarto:</h2>
            <div className="centralizarButtons">
                <div className="botaoQuartos">
                    <Button classname="button" insideText="4 Lugares" />
                    <Button classname="button" insideText="6 Lugares" />
                    <Button classname="button" insideText="10 Lugares" />
                </div>
            </div>
        </div>

        </>
    );
}
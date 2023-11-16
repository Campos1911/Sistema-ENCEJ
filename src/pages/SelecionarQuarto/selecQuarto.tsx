import React from "react";
import './style.css'

import Legenda from '../../images/Legenda/Legenda.png'
import Button from "../../components/Button/button";
import ContainerQuarto from "../../components/Container Quarto/containerQuarto";
import Header from "../../components/Header/headerUser";
import Footer from "../../components/Footer/footer";
import Line from "../../images/Organizadores/line.jpg"

export default function SelecQuarto() {
    return(
        <>

        <Header username="Carlos R. Guimarães" empresaJ="CT Junior"/>

        <div className="divisoria">
            <img className="line" src={Line} alt="Divisória" />
        </div>

        <div className="divisoriaDois">
        </div>
        
        <section className="boxLegenda">
            <img className="legenda" src={Legenda} alt="legendaQuartos" />
        </section>

        <div className="selecCapacidade">
            <h2>Selecione a capacidade do quarto:</h2>
            <div className="centralizarButtons">
                <div className="botaoQuartos">
                    <a href="http://google.com"><Button classname="button" insideText="4 Lugares" /></a>
                    <a href="http://google.com"><Button classname="button" insideText="6 Lugares" /></a>
                    <a href="http://google.com"><Button classname="button" insideText="10 Lugares" /></a>
                </div>
            </div>
        </div>

        <div className="linha">
            <ContainerQuarto quarto='Quarto 1'/>
            <ContainerQuarto quarto='Quarto 2'/>
        </div>

        <div className="linha">
            <ContainerQuarto quarto='Quarto 3'/>
            <ContainerQuarto quarto='Quarto 4'/>
        </div>

        <div className="linha">
            <ContainerQuarto quarto='Quarto 5'/>
            <ContainerQuarto quarto='Quarto 6'/>
        </div>

        <Footer />

        </>
    );
}
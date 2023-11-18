import React from "react";
import './selec.css'

import Legenda from '../../../images/Legenda/Legenda.png'
import Button from "../../../components/Button/button";
import Container6Quarto from "../../../components/Container Quarto/container6Q/container6Quarto";
import Header from "../../../components/Header/headerUser";
import Footer from "../../../components/Footer/footer";



export default function SelecQuarto6() {
    return(
        <>

        <Header caminho="alterar-dados" username="Carlos Teste" empresaJ="CT Junior"/>
        
        <section className="boxLegenda">
            <img className="legenda" src={Legenda} alt="legendaQuartos" />
        </section>

        <div className="selecCapacidade">
            <h2>Selecione a capacidade do quarto:</h2>
            <div className="centralizarButtons">
                <div className="botaoQuartos">
                <Button caminho="selecionar-quarto" classname="button" insideText="4 Lugares" />
                <Button caminho="selecionar-quarto-6-vagas" classname="button" insideText="6 Lugares" />
                <Button caminho="selecionar-quarto-10-vagas" classname="button" insideText="10 Lugares" />
                </div>
            </div>
        </div>

        
        {/**DIV'S QUE SEPARAM OS CONTAINERS DE QUARTO EM LINHAS**/}
        <div className="linha">
            <Container6Quarto quarto='Quarto 1'/>
            <Container6Quarto quarto='Quarto 2'/>
        </div>

        <div className="linha">
            <Container6Quarto quarto='Quarto 3'/>
            <Container6Quarto quarto='Quarto 4'/>
        </div>

        <div className="linha">
            <Container6Quarto quarto='Quarto 5'/>
            <Container6Quarto quarto='Quarto 6'/>
        </div>

        <Footer />

        </>
    );
}
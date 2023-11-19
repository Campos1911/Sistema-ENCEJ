import React from "react";

import Legenda from '../../../images/Legenda/Legenda.png'
import Button from "../../../components/Button/button";
import Container4Quarto from "../../../components/Popup Quarto/popup4Q/container4Quarto";
import Header from "../../../components/Header/headerUser";
import Footer from "../../../components/Footer/footer";


export default function SelecQuarto() {
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
            <Container4Quarto quarto='Quarto 1'/>
            <Container4Quarto quarto='Quarto 2'/>
        </div>

        <div className="linha">
            <Container4Quarto quarto='Quarto 3'/>
            <Container4Quarto quarto='Quarto 4'/>
        </div>

        <div className="linha">
            <Container4Quarto quarto='Quarto 5'/>
            <Container4Quarto quarto='Quarto 6'/>
        </div>

        <Footer classname="footer4vagas"/>

        </>
    );
}
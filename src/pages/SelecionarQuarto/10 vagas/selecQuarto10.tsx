import React from "react";
import './selec.css'

import Legenda from '../../../images/Legenda/Legenda.png'
import Button from "../../../components/Button/button";
import Container10Quarto from "../../../components/Popup Quarto/popup10Q/container10Quarto";
import Header from "../../../components/Header/headerUser";
import Footer from "../../../components/Footer/footer";
import Line from "../../../images/Organizadores/line.jpg"



export default function SelecQuarto10() {
    return(
        <>

        <Header caminho="alterar-dados" username="Carlos Teste" empresaJ="CT Junior"/>

        <section className="divisoria">
            <img className="line" src={Line} alt="divisória" />
        </section>
        
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
            <Container10Quarto quarto='Quarto 1'/>
            <Container10Quarto quarto='Quarto 2'/>
        </div>

        <div className="linha">
            <Container10Quarto quarto='Quarto 3'/>
            <Container10Quarto quarto='Quarto 4'/>
        </div>

        <div className="linha">
            <Container10Quarto quarto='Quarto 5'/>
            <Container10Quarto quarto='Quarto 6'/>
        </div>

        {/**USADO PARA A RESPONSIVIDADE NOS CELULARES**/}
        <div className="coluna-responsiva">
            <Container10Quarto quarto='Quarto 1'/>
            <Container10Quarto quarto='Quarto 2'/>
            <Container10Quarto quarto='Quarto 3'/>
            <Container10Quarto quarto='Quarto 4'/>
            <Container10Quarto quarto='Quarto 5'/>
            <Container10Quarto quarto='Quarto 6'/>
        </div>

        <Footer classname="footer10vagas"/>
        

        </>
    );
}
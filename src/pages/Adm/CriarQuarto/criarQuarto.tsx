import React from "react";
import "./criarQuarto.css";
import Header from "../../../components/Header/headerUser";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/button";
import Footer from "../../../components/Footer/footer";

export default function CriarQuarto() {
    return (
        <>
            <Header caminho="dev-page" username="Admin" empresaJ="Administradores"></Header>
            
            <div className="criar-quarto-center">
                <div className="input-vagas-center">
                    <h1>Sistema de criação de Quartos</h1>
                    <p>Preencha o campo abaixo para prosseguir</p>
                    <Input type="text" placeh="Insira o número de vagas disponíveis" classname="num-vagas"></Input>
                    <Button caminho="dev-page" classname="bttn-enviar-quarto" insideText="Criar Quarto" ></Button>
                </div>
            
            <div className="padding-box-footer">
                <Footer classname="footer-criar-quarto" ></Footer>
            </div>
            
            </div>
        </>
    )

}
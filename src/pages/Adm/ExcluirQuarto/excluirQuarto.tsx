import React from "react";
import "./excluirQuarto.css"
import Header from "../../../components/Header/headerUser";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/button";
import Footer from "../../../components/Footer/footer";

export default function ExcluirQuarto() {
    return (
        <>
            <Header caminho="dev-page" username="Admin" empresaJ="Administradores"></Header>
        
            <div className="excluir-quarto-center">
                <div className="input-excluir-center">
                    <h1>Sistema de exclusão de quarto</h1>
                    <p>Preencha o campo abaixo para prosseguir</p>
                    <Input type="text" placeh="Insira o id do quarto que quer remover" classname="id-quarto"></Input>
                    <Button caminho="dev-page" classname="bttn-excluir-quarto" insideText="Excluir Quarto" ></Button>
                </div>
            
            <Footer classname="footer-excluir-quarto" ></Footer>
            </div>
        </>
    );
}
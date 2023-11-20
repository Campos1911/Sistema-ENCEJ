import React from "react";
import "./excluirPessoa.css";
import Header from "../../../components/Header/headerUser";
import Input from "../../../components/Input/input";
import Button from "../../../components/Button/button";
import Footer from "../../../components/Footer/footer";

export default function ExcluirPessoa() {
    return (
        <>
            <Header caminho="dev-page" username="Admin" empresaJ="Administrador"></Header>

            <div className="excluir-pessoa-center">
                <div className="input-excluir-pessoa-center">
                    <h1>Sistema de exclusão de Pessoa</h1>
                    <p>Preencha o campo abaixo para prosseguir</p>
                    <Input type="text" placeh="Insira o email da pessoa" classname="email-excluir"></Input>
                    <Button caminho="dev-page" classname="bttn-excluir-pessoa" insideText="Excluir Pessoa" ></Button>
                </div>
            
            <Footer classname="footer-excluir-pessoa" ></Footer>
            </div>

        </>
    )
}
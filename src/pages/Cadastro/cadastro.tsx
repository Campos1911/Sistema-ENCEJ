import React from "react";
import Logo from "../../images/Logo/Logo.jpg";
import "./cadastro.css"
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";

export default function Cadastro() {
    return (
        <>
            {/**DIV PARA CENTRALIZAR ELEMENTOS NO MEIO DA PÁGINA**/}
            <div className="centralizarPg">
                <img className='logoEncejCadastro' src={Logo} alt="logoEncej" />

                    <h1>Registro de Participante</h1>
                    <p>Insira seus dados para prosseguir</p>

                    {/**FORMULÁRIO PARA PEGAR DADOS DO PARTICIPANTE**/}
                    <form className="boxInputs">
                        <Input type="text" placeh="Nome do participante" classname="username"/>
                        <Input type="password" placeh="Insira sua senha" classname="password"/>
                        <Input type="password" placeh="Confirme sua senha" classname="password"/>
                    </form>

                    <Button caminho="boas-vindas" insideText="Registrar" classname="bttnCadastro" />

                    <Footer classname="footerCadastro"/>
            </div>
        </>
    );
}
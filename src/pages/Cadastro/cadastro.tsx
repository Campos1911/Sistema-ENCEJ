import React from "react";
import Logo from "../../images/Logo/Logo.jpg";
import "./style.css"
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";

export default function Cadastro() {
    return (
        <>
            <div className="centralizarPg">
                <img className='logoEncej' src={Logo} alt="logoEncej" />

                    <h1>Registro de Participante</h1>
                    <p>Insira seus dados para prosseguir</p>

                    <form className="boxInputs">
                        <Input type="text" placeh="Nome do participante" classname="username"/>
                        <Input type="password" placeh="Insira sua senha" classname="password"/>
                        <Input type="password" placeh="Confirme sua senha" classname="password"/>
                    </form>
                    
                    <select className="selecEJ">
                        <option value="ej1" selected>CT Junior</option>
                        <option value="ej2">Ej2</option>
                        <option value="ej3">Ej3</option>
                    </select>

                    <Button insideText="Registrar" classname="bttnCadastro" />

                    <Footer />
            </div>
        </>
    );
}
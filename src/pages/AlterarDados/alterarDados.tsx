import React from "react";
import "./style.css";
import Header from "../../components/Header/headerUser";
import Input from "../../components/Input/input";

export default function AlterarDados() {
    return(
        <>
            <Header username="Carlos Teste" empresaJ="CT Junior"/>

            <Input type="text" placeh="Insira seu nome" classname="username" />
            <Input type="password" placeh="Insira sua senha" classname="password" />
            <Input type="text" placeh="Insira seu nome" classname="username" />

        </>
    );
}
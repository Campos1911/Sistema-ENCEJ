import React from "react";
import "./alteradados.css";
import Header from "../../components/Header/headerUser";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";

export default function AlterarDados() {
    return(
        <>
            <Header caminho="alterar-dados" username="Carlos Teste" empresaJ="CT Junior"/>

            <section className="text">
                <h1>Alteração de dados do Usuário</h1>
                <p>Insira seus novos dados abaixo</p>
            </section>

            {/**FORMULÁRIO PARA PEGAR DADOS DO PARTICIPANTE**/}
            <form className="centralizar">
                <Input type="text" placeh="Insira seu nome" classname="username" />
                <Input type="password" placeh="Insira sua senha" classname="password" />
                <Input type="text" placeh="Insira seu nome atualizado" classname="newUsername" />
                <Input type="text" placeh="Insira seu novo meio de Contato" classname="newContact" />
                <Button caminho="alterar-foto" insideText="Salvar" classname="bttn1" />
            </form>

            <Footer />
            
        </>
    );
}
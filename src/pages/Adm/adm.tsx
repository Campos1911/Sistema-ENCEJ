import React from "react";
import "./adm.css";
import Header from "../../components/Header/headerUser";
import Footer from "../../components/Footer/footer";
import Button from "../../components/Button/button";

export default function Adm() {
    return (
        <>
            <div className="box-header-desktop">
            <Header caminho="dev-page" username="Admin" empresaJ="Administradores"></Header>
            </div>

            <div className="centralize-adm">
                <div className="box-adm">
                    <h1 className="adm-page">Página de administrador</h1>
                    <p className="adm-description">Selecione uma opção</p>
                    <div className="box-buttons-adm">
                        <Button caminho="dev-page/criar-quarto" classname="bttn-adm1" insideText="Criar Quarto"></Button>
                        <Button caminho="dev-page/excluir-quarto" classname="bttn-adm2" insideText="Excluir Quarto"></Button>
                        <Button caminho="dev-page/excluir-pessoa" classname="bttn-adm3" insideText="Excluir Pessoa"></Button>
                    </div>
                </div>
                <Footer classname="footerAdm"></Footer>
            </div>
        </>
    )
}
import React from "react";
import './style.css';

import Input from "../../components/Input/input";

import CTJLogo from '../../images/Organizadores/ctj.jpg'
import JunioresLogo from '../../images/Organizadores/juniores.jpg'
import Button from "../../components/Button/button";

export default function AtualizarFoto() {
    return (
        <>
            <div className="centralizar">
                <h2>
                    Alterar foto e Empresa Junior
                </h2>

                <div className="fotoUser">
                    <img src="https://images.unsplash.com/photo-1584999734482-0361aecad844?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGltYWdlbSUyMGRlJTIwcGVyZmlsfGVufDB8fDB8fHww" alt="Foto User" />
                    <select>
                        <option value="ej1">Ej1</option>
                        <option value="ej2">Ej2</option>
                        <option value="ej3">Ej3</option>
                    </select>
                    <Button classname="bttAtualizar" insideText="Salvar"/>
                </div>

                <div className="logo-organizadores">
                    <img className='ctj' src={CTJLogo} alt="ctjunior logo" />
                    <img className='juniores' src={JunioresLogo} alt="juniores logo" />
                </div>
            </div>
        </>
    );
}
import React from "react";
import './altFoto.css'

import Footer from "../../components/Footer/footer";
import ImageEdit from '../../../src/images/Organizadores/imageEdit.png'
import Button from '../../components/Button/button';
import Avatar from "../../images/Organizadores/Avatar.jpg";

export default function AlterarFoto() {
    return(
        
        <>
            <div className="centralizarTitulo">
                <h1 color="white"><strong>Alterar foto e Empresa Junior</strong></h1>
            </div>

                {/**ESTILIZA O CIRCULO COM A IMAGEM*/}
                <div className="centralizarUserPic">
                    <img className="userPic" src={Avatar} alt="Foto de Usuário"/>
                    {/**CRIA O ÍCONE FILE PICTURE**/}
                    <img className="modelaIcone" src={ImageEdit} alt="Ícone de Edição"/>
                </div>

                {/**SELETOR DE EJ, INTEGRAR NOMEEJ E HOLDERNAMECHANGE**/}
                <div className="centralizarSeletor">
                    <form>
                    
                        <select> 
                        
                            <option value="opcao1"> Adapti Soluções Web </option>
                            <option value="opcao2">Alimentares</option>
                            <option value="opcao3">Archipolis</option>
                            <option value="opcao4">Biológica</option>
                            <option value="opcao5">BiomES</option>
                            <option value="opcao6">Cinética</option>
                            <option value="opcao7">CJA</option>
                            <option value="opcao8">Click</option>
                            <option value="opcao9">Constat</option>
                            <option value="opcao10">CT Júnior</option>
                            <option value="opcao11">Dinamec</option>
                        </select>
                    </form>
                </div>

            <div className="centralizarButtons">
                <Button caminho="selecionar-quarto" classname='bttPic' insideText='Salvar'/>
            </div>
      
            <Footer classname="footerAltfoto"/>
        </>
    );
} 
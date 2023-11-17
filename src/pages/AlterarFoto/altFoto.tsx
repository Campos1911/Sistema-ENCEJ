import React, { useEffect }  from 'react';
import './style.css'

import Footer from "../../components/Footer/footer";
import ImageEdit from '../../../src/images/Organizadores/imageEdit.png'
import PicPlaceHolder from '../../../src/images/Organizadores/userHolder.jpg'
import Button from '../../components/Button/button';

export default function AlterarFoto () {
    return (
        <>
        
            <section className="centralizarTitulo">
                <h1><strong>Alterar foto e Empresa Junior</strong></h1>
            </section>

                /**ESTILIZA O CIRCULO COM A IMAGEM PLACEHOLDER DE AVATAR**/
                <section className="centralizarUserHolder">
                    <image src={PicPlaceHolder} alt="Foto de Usuário Temporária"/>
                <section/>

                /**CRIA O ÍCONE COM INPUT DE FILE PICTURE**/
                <label for="selecionarFoto" className="modelaIcone">
                    <input className="inputStyle" type="file" id="selecionarFoto" accept="image/png, image/jpeg" name="filename" onChange={handlePicChange}/>
                    <image src={ImageEdit} alt="Ícone de Edição"/>
                </label>

                /**ESTILIZA E ALTERA A FOTO PARA A QUE FOI SELECIONADA, INTEGRAR IMAGEMSELECIONADA**/
                <div className="fotoCircular">
                    <img id="imagemSelecionada" src={imagemSelecionada} alt="Foto Selecionada" />
                </div>

                /**SELETOR DE EJ, INTEGRAR NOMEEJ E HOLDERNAMECHANGE**/
                <section className="centralizarSeletor">
                    <form>
                        <select value={nomeEJ} onChange={holderNameChange}> 
                            <option value="">Selecione sua Empresa Junior</option>
                            <option value="opcao1">Opção 1</option>
                            <option value="opcao2">Opção 2</option>
                            <option value="opcao3">Opção 3</option>
                            <option value="opcao4">Opção 4</option>
                        </select>
                    </form>
                </section>

            <div className="centralizarButtons">
                <Button classname='bttPic' insideText='Salvar'/>
            </div>
      
            <Footer />
        
        </>

    );
}
import React from "react";
import Button from "../../Button/button";
import "./style.css";
import Modal from "../../Modal/modal";
import { useState } from "react";

export default function Container4Quarto({quarto}:{quarto: string}) {
    
    const [modal, setModal] = useState(false) /** useState para ligar ou desligar visualização do modal **/

    return (
        <>
        <div className="box1">
                <div className="center">
                    <h3>{quarto}</h3>
                    <p>Disponível</p>
                </div>
                
                <div className="bttBox">
                    <button className="verDetalhes" onClick={() => {setModal(true)}}>Ver mais</button>
                    
                    {/**Modal é o componente utilizado para mostrar o popup**/}
                    <Modal isOpen={modal}>
                        <h1>Revise as informações do quarto antes de confirmar</h1>
                        <div className="boxInfo">
                            AQUI VEM A CAIXA DE DETALHES
                        </div>
                        <div className="boxButtons">
                            <Button caminho="boas-vindas" classname="button4Q" insideText="Confirmar"></Button>
                            <button onClick={() => {setModal(false)}}>Voltar</button>
                        </div>
                    </Modal>
                
                </div>
            
            </div>
        </>
    );
}
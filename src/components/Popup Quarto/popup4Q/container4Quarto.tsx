import React from "react";
import Button from "../../Button/button";
import "./style.css";
import Modal from "../../Modal/modal";
import { useState } from "react";
import ContainerSucesso from "../../ContainerQuarto4P/containerQuarto4P";

export default function Container4Quarto({quarto}:{quarto: string}) {
    
    const [modal, setModal] = useState(false) /** useState para ligar ou desligar visualização do modal **/

    return (
        <>
        <div className="box1">
                <div className="center">
                    <h3>{quarto}</h3>
                    <h4>Disponível</h4>
                </div>
                
                <div className="bttBox">
                    <button className="verDetalhes" onClick={() => {setModal(true)}}>Ver mais</button>
                    
                    {/**Modal é o componente utilizado para mostrar o popup**/}
                    <Modal isOpen={modal}>
                        <div className="box-modal">
                            <h1 className="modal-title">Revise as informações do quarto antes de confirmar</h1>
                                <div className="boxInfo">
                                    <ContainerSucesso username="Carlos Teste" empresaJ="CT Junior"/>
                                <div className="boxButtons">
                                    <Button caminho="sucesso-4-vagas" classname="button4Q1" insideText="Confirmar"></Button>
                                    <button  className="button4Q" onClick={() => {setModal(false)}}>Voltar</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                
                </div>
            
            </div>
        </>
    );
}
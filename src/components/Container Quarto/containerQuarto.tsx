import React from "react";
import Button from "../Button/button";
import "./style.css";
import Modal from "../Modal/modal";
import { useState } from "react";

export default function ContainerQuarto({quarto}:{quarto: string}) {
    
    const [modal, setModal] = useState(false)

    return (
        <>
        <div className="box1">
                <div className="center">
                    <h3>{quarto}</h3>
                    <p>Disponível</p>
                </div>
                
                <div className="bttBox">
                    <button className="verDetalhes" onClick={() => {setModal(true)}}>Ver mais</button>
                    <Modal isOpen={modal}>
                        <h1>Revise as informações do quarto antes de confirmar</h1>
                        <div className="boxInfo">
                            DASDNASK
                        </div>
                        <div className="boxButtons">
                            <button>Confirmar</button>
                            <button onClick={() => {setModal(false)}}>Voltar</button>
                        </div>
                    </Modal>
                </div>
            
            </div>
        </>
    );
}
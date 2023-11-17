import React from "react";
import Button from "../Button/button";
import "./style.css";
import { useState } from "react";
import Modal from "../Modal/modal";

export default function ContainerQuarto({quarto}:{quarto: string}) {
    
    const [openModal, setOpenModal] = useState(false)
    
    return (
        <>
        <div className="box1">
                <div className="center">
                    <h3>{quarto}</h3>
                    <p>Disponível</p>
                </div>
                
                <div className="bttBox">
                    <button  className="verDetalhes" onClick={() => setOpenModal(true)}>Ver detalhes</button>
                    <Modal isOpen={openModal}></Modal>
                </div>
            
            </div>
        </>
    );
}
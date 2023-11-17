import React from 'react';
import "./modal.css"

export default function Modal({isOpen}:{isOpen:boolean}) {
    
    if (isOpen) {
        return (
            <div className="centralizarModal">
                <div className="modalContent">
                    <h1>TESTE</h1>
                </div>
            </div>
        )
    }
    
    {
        return null;
    }

}
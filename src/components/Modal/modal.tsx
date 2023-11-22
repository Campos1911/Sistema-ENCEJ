import React from 'react';
import "./modal.css"


/**COMPONENTE UTILIZADO PARA MOSTRAR POP UP NA ESCOLHA DO QUARTO**/
export default function Modal({isOpen, children}:{children:React.ReactNode, isOpen:boolean}) {
    if (isOpen) {
        return (
            <div className="modal">
                <div className="modalContent">
                        {children}
                    </div>
                </div>
        )
    }

    return null
}
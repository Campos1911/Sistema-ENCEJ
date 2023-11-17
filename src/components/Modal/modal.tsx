import React from 'react';
import "./modal.css"

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
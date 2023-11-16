import React from "react";
import "./style.css";


export default function ContainerSucesso({username, empresaJ}:{username:string, empresaJ:string}) {
    return (
        <>
        /**EH PRECISO RECEBER INFO DE QUANTIDADE DE PESSOAS QUE CABEM NO QUARTO**/
        <div className="whiteBox">

            /**RECEBER NUMERO DO QUARTO**/

            <h1>Você está no Quarto 5!</h1>

            /**ICONE STATUS DO QUARTO **/
            
            <div className="boxUser">
                <img className="fotoUser" src={Avatar} alt="Foto de Perfil" />
                <div className="columInfos">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>
        
        </>
    );
    }
import React from "react";
import "./container10p.css";

import Avatar from "../../images/Organizadores/Avatar.jpg"
import Empty from "../../images/Organizadores/Empty.jpg"  


export default function ContainerSucesso({username, empresaJ}:{username:string, empresaJ:string}) {
    return (
        <>

        <div className="centralizarPg10">

        {/**EH PRECISO RECEBER INFO DE QUANTIDADE DE PESSOAS QUE CABEM NO QUARTO**/}

            {/**RECEBER NUMERO DO QUARTO**/}
        <div className="boxRoom">
            <div className="title">
                <h1>Você está no Quarto 5!</h1>
                <img className="styleEmpty" src={Empty} alt="Empty" />
            </div>

            {/**ICONE STATUS DO QUARTO **/}
            {/**QUANDO CHAMAR ESSA FUNCAO PASSAR USERNAME E EMPRESAJ */}
        <div className="column">
            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>

            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>
               
        <div className="column">
            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>

            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>

            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>

            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>

        <div className="column">
            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>

            <div className="item">
                <img className="fotoUsuario" src={Avatar} alt="Foto de Perfil" />
                <div className="infosNew">
                    <h2>{username}</h2>
                    <p>{empresaJ}</p>
                </div>
            </div>
        </div>

        </div>
        </div>

        </>
    );
    }
import React from "react";
import './style.css'
import Button from "../../components/Button/button";
import CTJLogo from "../../images/Organizadores/ctj.jpg"
import JunioresLogo from "../../images/Organizadores/juniores.jpg"


export default function BoasVindas() {
    return (
        <>
        <header>
            <div className="userInfo">
                <h2>Carlos R. Guimarães</h2>
                <p>CT Junior</p>
            </div>

            <div className="logoEncej">

            </div>
        </header>

        <main>
            <h1>Boas vindas, Carlos </h1>
            <p>Você deverá escolher um quarto dentre os disponibilizados. Caso queira trocar de quarto, basta escolher outro quarto que têm vagas disponíveis até a data limite. Para ver detalhadamente as informações de cada quarto, escolha a opção “ver quartos”.</p>
            <Button classname="bttQuartos" insideText="Ver Quartos"/>
        </main>

        <footer>
            <img className='ctj' src={CTJLogo} alt="ctjunior logo" />
            <img className='juniores' src={JunioresLogo} alt="juniores logo" />
        </footer>
        </>
    );
}
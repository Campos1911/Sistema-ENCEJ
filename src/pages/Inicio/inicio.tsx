import React from 'react';
import './inicio.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/**IMPORT DAS IMAGENS**/
import Encej from '../../../src/images/Logo/Logo.jpg'

/**IMPORT DOS COMPONENTES**/
import Input from '../../components/Input/input'
import Button from '../../components/Button/button';
import Footer from '../../components/Footer/footer';

/**FUNÇÃO PARA MUDAR DE PÁGINA AO CLICAR NO BOTÃO --> MUDAR PARA UM ARQUIVO ESPECÍFICO**/

export default function Home() {
    
    const navigate = useNavigate()

    const handleRedirectRegister = () => {
      return navigate("/cadastro")
    }

  return (
      <>
      <div className="centralizar-pg">

        <img className='logoEncej' src={Encej} alt="logoEncej" />

        <h2>Reserva de quartos</h2>

        <p>Faça login para continuar</p>

        <section className="inputs-section">
          <Input classname='username' type='text' placeh='carlos.rodriguez'/>
          <Input classname='password' type='password' placeh='**************'/>
          <p  onClick={handleRedirectRegister} className='register'>Ainda não possui conta? clique aqui e REGISTRE-SE</p>
        </section>

        <Button caminho="boas-vindas" classname='bttLogin' insideText='Entrar'/>
        <div className="responsiveFooter">
          <Footer classname='footerLogin'/>
        </div>
      </div>
      </>
    );
}
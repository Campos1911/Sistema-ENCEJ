import React from 'react';
import './style.css'

/**IMPORT DAS IMAGENS**/
import CTJLogo from '../../images/Organizadores/ctj.jpg'
import JunioresLogo from '../../images/Organizadores/juniores.jpg'
import Logo from '../../../src/images/Logo/Logo.jpg'

/**IMPORT DOS COMPONENTES**/
import Input from '../../components/Input/input'
import Button from '../../components/Button/button';
import Footer from '../../components/Footer/footer';

/**FUNÇÃO PARA MUDAR DE PÁGINA AO CLICAR NO BOTÃO --> MUDAR PARA UM ARQUIVO ESPECÍFICO**/

export default function Home() {
    return (
        <>
      <div className="centralizar-pg">

        <img className='logoEncej' src={Logo} alt="logoEncej" />

        <h2>Reserva de Quartos</h2>

        <p>Faça login para continuar</p>

        <section className="inputs-section">
          <Input classname='username' type='text' placeh='carlos.rodriguez'/>
          <Input classname='password' type='password' placeh='**************'/>
        </section>

        <Button classname='bttLogin' insideText='Entrar'/>

        <Footer />

      </div>
      </>
    );
}
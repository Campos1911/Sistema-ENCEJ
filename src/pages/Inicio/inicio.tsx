import React from 'react';
import './inicio.css'

/**IMPORT DAS IMAGENS**/
import CTJLogo from '../../images/Organizadores/ctj.jpg'
import JunioresLogo from '../../images/Organizadores/juniores.jpg'
import Encej from '../../../src/images/Logo/Logo.jpg'

/**IMPORT DOS COMPONENTES**/
import Input from '../../components/Input/input'
import Button from '../../components/Button/button';

/**FUNÇÃO PARA MUDAR DE PÁGINA AO CLICAR NO BOTÃO --> MUDAR PARA UM ARQUIVO ESPECÍFICO**/

export default function Home() {
    return (
      <>
      <div className="centralizar-pg">

        <img className='logoEncej' src={Encej} alt="logoEncej" />

        <h2>Reserva de Quartos</h2>

        <p>Faça login para continuar</p>

        <section className="inputs-section">
          <Input classname='username' type='text' placeh='carlos.rodriguez'/>
          <Input classname='password' type='password' placeh='**************'/>
        </section>

        <Button caminho="selecionar-quarto" classname='bttLogin' insideText='Entrar'/>

        <div className="logo-organizadores">
          <img className='ctj' src={CTJLogo} alt="ctjunior logo" />
          <img className='juniores' src={JunioresLogo} alt="juniores logo" />
        </div>

      </div>
      </>
    );
}
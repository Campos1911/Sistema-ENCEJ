import React from 'react';
import './successSix.css'

import Container6P from '../../components/ContainerQuarto6P/containerQuarto6P';
import Button from '../../components/Button/button';
import Check from '../../images/Organizadores/Check.jpg'

export default function Sucesso6P() {
    return (
      <>

        <section className="centralizaSuccess">
            <img className='check' src={Check} alt='Check' />
            <h1><strong>Sucesso!</strong></h1>
        </section>

        <div className="centralizaContainer">
          <Container6P username='Carlos Guimarães' empresaJ='CT Júnior' />
        </div>

        <div className='centralizarButton'>
            <Button caminho="selecionar-quarto" classname='bttBack' insideText='Voltar'/>
        </div>

      </>
    );
}
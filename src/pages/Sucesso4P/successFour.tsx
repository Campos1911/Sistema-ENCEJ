import React from 'react';
import './successFour.css'

import Container4P from '../../components/ContainerQuarto4P/containerQuarto4P';
import Button from '../../components/Button/button';
import Check from '../../images/Organizadores/Check.jpg'

export default function Sucesso4P() {
    return (
      <>

        <section className="centralizaSuccess">
            <img className='check' src={Check} alt='Check' />
            <h1><strong>Sucesso!</strong></h1>
        </section>

        <div className="centralizaContainer">
          <Container4P username='CarlosTeste' empresaJ='CT Júnior'/>
        </div>

        <div className='centralizarButton'>
            <Button caminho="selecionar-quarto" classname='bttBack' insideText='Voltar'/>
        </div>

      </>
    );
}
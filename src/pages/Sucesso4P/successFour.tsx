import React from 'react';
import './style.css'

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

        <Container4P username='CarlosTeste' empresaJ='CT Júnior'/>

        <div className='centralizarButton'>
            <Button caminho="selecionar-quarto" classname='bttBack' insideText='Voltar'/>
        </div>

      </>
    );
}
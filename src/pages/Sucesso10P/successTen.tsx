import React from 'react';
import './style.css'

import Container10P from '../../components/ContainerQuarto10P/containerQuarto10P';
import Button from '../../components/Button/button';
import Check from '../../images/Organizadores/Check.jpg'

export default function Sucesso10P() {
    return (
      <>

        <section className="centralizaSuccess">
            <img className='check' src={Check} alt='Check' />
            <h1><strong>Sucesso!</strong></h1>
        </section>

        <div className="centralizaContainer">
          <Container10P username='CarlosTeste' empresaJ='CT Júnior'/>
        </div>

        <div className='centralizarButton'>
            <Button caminho="selecionar-quarto" classname='bttBack' insideText='Voltar'/>
        </div>

      </>
    );
}
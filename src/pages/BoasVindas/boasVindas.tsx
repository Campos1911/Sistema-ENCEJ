import React from 'react';
import './style.css';

import Header from "../../components/Header/headerUser";
import Footer from "../../components/Footer/footer";

export default function boasVindas () {
  return (
    <>

      <Header username="Carlos Teste" empresaJ="CT Junior"/>

        <section classname="centralizarTitulo">
          <h1><strong>Boas vindas,</strong></h1>
        </section>

        <p classname="centralizarParagrafo">
          Você deverá escolher um quarto dentre os disponibilizados. Caso <br/>
          queira trocar de quarto, basta escolher outro quarto que têm vagas <br/>
          disponíveis até a data limite. Para ver detalhadamente as <br/>
          informações de cada quarto, escolha a opção “ver quartos”.
        </p>
        
        <div classname="centralizarButtons">
          <Button classname='bttWelcome' insideText='Ver quartos'/>
        </div>
      
      <Footer />
        
    </>
  );
}
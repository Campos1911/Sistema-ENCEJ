import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo/Logo.jpg";
import "./cadastro.css"
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import Footer from "../../components/Footer/footer";

export default function Cadastro() {

    const [teste, setTeste] = useState ([])
    const navigate = useNavigate ()
    const URL = 'https://wldzajo7ka.execute-api.us-east-1.amazonaws.com/dev/' 

      async function handleLogin () {
        const response = await fetch (`${URL}person`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
            "email": {teste},
            "senha": "1234",
            "nome": "Alex",
            "empresa": "CT"
          
                    })
                  })
            return(navigate("/boas-vindas"))
          }

          function handleLogin1(event: any) {

            setTeste(event.target.value)
            console.log(teste)
          }


    return (
        <>
            {/**DIV PARA CENTRALIZAR ELEMENTOS NO MEIO DA PÁGINA**/}
            <div className="centralizarPg">
                <img className='logoEncejCadastro' src={Logo} alt="logoEncej" />

                    <div className="responsividadeTitulo">
                        <h1>Registro de Participante</h1>
                        <p>Insira seus dados para prosseguir</p>
                    </div>

                    {/**FORMULÁRIO PARA PEGAR DADOS DO PARTICIPANTE**/}
                    <form className="boxInputs">
                        <Input type="text" placeh="Nome do participante" classname="username"/>
                        <input value={teste}  onChange={(event) => handleLogin1(event)} type="teste" placeholder="Email do participante" id="username1" />
                        <Input type="password" placeh="Insira sua senha" classname="password"/>
                        <Input type="password" placeh="Confirme sua senha" classname="password"/>
                    </form>

                    <div className="ajustaButton">
                        <button className="bttnCadastro" onClick={handleLogin}>Registrar</button>
                    </div>                    

                    <div className="responsividadeFooterCadastro">
                        <Footer classname="footerCadastro"/> 
                    </div>
            </div>
        </>
    );
}
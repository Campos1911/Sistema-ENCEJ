import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Inicio/inicio";
import Cadastro from "./pages/Cadastro/cadastro";
import SelecQuarto4 from "./pages/SelecionarQuarto/4 vagas/selecQuarto";
import SelecQuarto6 from "./pages/SelecionarQuarto/6 vagas/selecQuarto6";
import SelecQuarto10 from "./pages/SelecionarQuarto/10 vagas/selecQuarto10";
import AlterarDados from "./pages/AlterarDados/alterarDados";
import BoasVindas from "./pages/BoasVindas/boasVindas";
import Sucesso4P from "./pages/Sucesso4P/successFour";
import Sucesso6P from "./pages/Sucesso6P/successSix";
import Sucesso10P from "./pages/Sucesso10P/successTen";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/boas-vindas" element={<BoasVindas />}></Route>
                <Route path="/alterar-dados" element={<AlterarDados />}></Route>
                <Route path="/selecionar-quarto" element={<SelecQuarto4 />}></Route>
                <Route path="/selecionar-quarto-6-vagas" element={<SelecQuarto6 />}></Route>
                <Route path="/selecionar-quarto-10-vagas" element={<SelecQuarto10 />}></Route>
                <Route path="/sucesso-4-vagas" element={<Sucesso4P></Sucesso4P>}></Route>
                <Route path="/sucesso-6-vagas" element={<Sucesso6P></Sucesso6P>}></Route>
                <Route path="/sucesso-10-vagas" element={<Sucesso10P></Sucesso10P>}></Route>
            </Routes>
        </Router>
    )
}
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Inicio/inicio";
import SelecQuarto from "./pages/SelecionarQuarto/4 vagas/selecQuarto";
import Cadastro from "./pages/Cadastro/cadastro";
import SelecQuarto6 from "./pages/SelecionarQuarto/6 vagas/selecQuarto6";
import SelecQuarto10 from "./pages/SelecionarQuarto/10 vagas/selecQuarto10";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/selecionar-quarto" element={<SelecQuarto />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/selecionar-quarto-6-vagas" element={<SelecQuarto6 />}></Route>
                <Route path="/selecionar-quarto-10-vagas" element={<SelecQuarto10 />}></Route>
                <Route path="/boas-vindas" element={<Cadastro />}></Route>
            </Routes>
        </Router>
    )
}
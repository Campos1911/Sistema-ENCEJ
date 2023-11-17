import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Inicio/inicio";
import SelecQuarto from "./pages/SelecionarQuarto/4 vagas/selecQuarto";
import Cadastro from "./pages/Cadastro/cadastro";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/selecionar-quarto" element={<SelecQuarto />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/alterar-dados" element={<Home />}></Route>
                <Route path="/alterar-foto" element={<SelecQuarto />}></Route>
                <Route path="/boas-vindas" element={<Cadastro />}></Route>
            </Routes>
        </Router>
    )
}
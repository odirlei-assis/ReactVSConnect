import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from "./pages/Home"
import ListaServicos from "./pages/ListaServicos"
import Header from "./components/Header"

//CSS
import "./index.css"

//Biblioteca
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lista/servicos' element={<ListaServicos />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
)

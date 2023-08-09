import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from "./pages/home"
import ListaServicos from "./pages/listaServicos"
import Footer from "./components/footer"

//CSS
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ListaServicos />
    <Footer/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from "./pages/Home"
import ListaServicos from "./pages/ListaServicos"
import Footer from "./components/Footer"
import Header from "./components/Header"

//CSS
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <ListaServicos />
    <Footer/>
  </React.StrictMode>,
)

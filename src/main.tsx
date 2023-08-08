import React from 'react'
import ReactDOM from 'react-dom/client'

//Componentes
import Home from "./pages/home"

//CSS
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

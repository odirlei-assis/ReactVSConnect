import "./style.css";

import imgLogo from "../../assets/images/logo.svg";
import imgFace from "../../assets/images/facebook.svg";
import imgInsta from "../../assets/images/instagram.svg";
import imgLink from "../../assets/images/linkedin.svg";

function Footer2() {

    return (
        <footer id="footer2">
            <div className="container rodape">
                <div className="rodape_conteudo">
                    <div className="rodape_conteudo_paginas">
                        <h2>Páginas</h2>
                        <ul>
                            <li>Login</li>
                            <li>Home</li>
                            <li>Listar Serviços</li>
                            <li>Cadastrar Cliente</li>
                            <li>Cadastrar Desenvolvedor</li>
                        </ul>
                    </div>
                    <img src={imgLogo} alt="" />
                    <div className="rodape_conteudo_contatos">
                        <h2>Contatos</h2>
                        <div>
                            <a href="#"><img src={imgFace} alt="" /></a>
                            <a href="#"><img src={imgInsta} alt="" /></a>
                            <a href="#"><img src={imgLink} alt="" /></a>
                        </div>
                        <a href="mailto:">contato@vsconnect.com</a>
                    </div>
                </div>
                <p>todos os direitos reservados ©.</p>
            </div>
        </footer>
    );
}
export default Footer2;
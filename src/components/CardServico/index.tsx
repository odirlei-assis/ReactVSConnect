//estilização
import { Link } from "react-router-dom";
import "./style.css";

function CardServico(props: any) {
    return (
        <div className="card_servico">
            <div className="topo_servico">
                <Link to={"/servico/" + props.id}>
                    <h2>{props.titulo}</h2>
                </Link>
                <span>R$ {props.proposta}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.listaTechs.map((tech: string, indice: number) => {
                        return <span key={indice}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}

export default CardServico;
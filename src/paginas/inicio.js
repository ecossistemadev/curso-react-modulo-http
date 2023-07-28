import { useEffect, useState } from "react";
import { deleteFrases, getFrases } from "../services/frases";
import { Link } from "react-router-dom";

export default function InicioPagina() {

    const [frases, setFrases] = useState([]);
    const [carregando, setCarregando] = useState(true);


    useEffect(() => {

        (async () => {
            await obterFrasesTela();
        })()

    }, []);

    async function obterFrasesTela() {
        setCarregando(true);
        let todasFrases = await getFrases();
        setFrases(todasFrases);
        setCarregando(false)
    }

    async function deletar(id) {
        setCarregando(true);
        await deleteFrases(id)
        await obterFrasesTela();
    }


    return (
        <>
            {/* <BotaoComponente/> */}
            <center>
                <h1>🔧Gerenciador de Postagens</h1>
                <Link to="/criar"><button className="botaoAzul">📝 Criar</button></Link>
            </center>

            {
                (carregando === true) ? (<> <h1>Carregando...</h1></>) : (<>
                    <ul>
                        {frases.map(frase => {
                            return (
                                <>
                                    <div className="card">
                                        <h2>{frase.frase}</h2>
                                        <p>{frase.nomeAutor}</p>
                                        <button className="botaoVermelho margin " onClick={() => { deletar(frase._id) }}>🗑️ Excluir</button>
                                        <Link to={`/editar/${frase._id}`}><button className="botaoVerde ">✏️ Editar</button></Link>
                                    </div>
                                </>
                            )
                        })}
                    </ul>

                </>)
            }


        </>
    )
}
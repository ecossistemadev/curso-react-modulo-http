import { useForm } from "react-hook-form"
import { postFrases } from "../services/frases";
import { useNavigate } from "react-router-dom";
import FormularioComponente from "../componente/formulario";

export default function CriarPagina(){


    const myForm = useForm();
    const navigate = useNavigate();

    async function submit(dados){
        let criarFrase = await postFrases(dados);
        if(criarFrase.status === "OK"){
            navigate("/")
        }
    }



    return(
        <>
        <center>
        <h1>Criar Frase</h1>

        <FormularioComponente onSubmit={myForm.handleSubmit(submit)} 
        frase={myForm.register("frase")} nomeAutor={myForm.register("nomeAutor")}
        />



        {/* <form onSubmit={myForm.handleSubmit(submit)}>
            <textarea rows="6" cols="80" {...myForm.register("frase")}></textarea><br/>
            <label>Autor:</label><br/>
            <input type="text" {...myForm.register("nomeAutor")}></input><br/><br/>
            <button type="submit">✉️ Enviar</button>
        </form> */}
        </center>
        </>
    )
}
import { useForm } from "react-hook-form"
import FormularioComponente from "../componente/formulario";
import { getFrasesId, putFrases } from "../services/frases";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditarPagina(){

    const {id} = useParams()
    const navigate = useNavigate();
    const myForm = useForm();

    useEffect(()=>{
        (async () =>{
            let fraseId = await getFrasesId(id)
            myForm.setValue("frase", fraseId[0].frase);
            myForm.setValue("nomeAutor", fraseId[0].nomeAutor);
        })()

    }, [id, myForm])

    async function submit(dados){
        let editarFrase = await putFrases(dados, id)
        if (editarFrase.status === "OK"){
            navigate("/")
        }
    }



    return(
        <>
        <center>
        <h1>Editar Frase</h1>

        <FormularioComponente onSubmit={myForm.handleSubmit(submit)}
        frase={myForm.register("frase")}
        nomeAutor={myForm.register("nomeAutor")}
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
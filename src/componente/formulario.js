export default function FormularioComponente(props){
    return(
        <>
         <form onSubmit={props.onSubmit}>
            <textarea rows="6" cols="80" {...props.frase}></textarea><br/>
            <label>Autor:</label><br/>
            <input type="text" {...props.nomeAutor}></input><br/><br/>
            <button className="botaoAzul" type="submit">✉️ Enviar</button>
        </form>
        </>
    )
}
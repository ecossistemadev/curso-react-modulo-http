import axios from "axios";

const API_FRASES = process.env.REACT_APP_BASE_URL;

export async function getFrases(){
    try {
        const respostaApi = await axios.get(`${API_FRASES}/obter`);
        return respostaApi.data.resposta
    } catch (error) {
        console.error(error);
        if(error.message.includes("status code 404")){
            alert("Erro: não encontramos nenhuma frase")
        }
        throw error;
    }

}

export async function getFrasesId(id){
    try {
        const respostaApi = await axios.get(`${API_FRASES}/obter/${id}`);
        return respostaApi.data.resposta
    } catch (error) {
        console.error(error);
        if(error.message.includes("status code 404")){
            alert("Erro: não encontramos os dados da frase selecionada")
        }
        throw error;
    }

}

export async function postFrases(dadosFrase){
    try {
        const respostaApi = await axios.post(`${API_FRASES}/criar`, dadosFrase);
        return respostaApi.data
    } catch (error) {
        console.error(error);
        if(error.message.includes("status code 404")){
            alert("Erro: não foi possível criar a frase")
        }
        throw error;
        
    }

}

export async function putFrases(dadosFrase, id){
    try {
        const respostaApi = await axios.put(`${API_FRASES}/editar/${id}`, dadosFrase );
        return respostaApi.data
    } catch (error) {
        console.error(error);
        if(error.message.includes("status code 404")){
            alert("Erro: não foi possível atualizar a frase")
        }
        throw error;

    } 
}

export async function deleteFrases(id){
    try {
        const respostaApi = await axios.delete(`${API_FRASES}/deletar/${id}`);
        return respostaApi.data
    } catch (error) {
        console.error(error);
        if(error.message.includes("status code 404")){
            alert("Erro: não foi possível deletar a frase")
        }
        throw error;
        
    } 
}





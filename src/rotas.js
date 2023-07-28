import { BrowserRouter, Route, Routes } from "react-router-dom";
import InicioPagina from "./paginas/inicio";
import CriarPagina from "./paginas/criar";
import Erro404Pagina from "./paginas/erro404";
import EditarPagina from "./paginas/editar";
import MenuComponente from "./componente/menu";

export default function Rotas(){
    return(
        <BrowserRouter>
            <MenuComponente/>
            <Routes>
                <Route path="/" element={<InicioPagina/>} />
                <Route path="/criar" element={<CriarPagina/>} />
                <Route path="/editar/:id" element={<EditarPagina/>} />
                <Route path="*" element={<Erro404Pagina/>} />
            </Routes>
        </BrowserRouter>
    )
}
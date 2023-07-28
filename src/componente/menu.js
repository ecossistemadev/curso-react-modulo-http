import { Link } from "react-router-dom";

export default function MenuComponente() {
    return (
        <>
            <ul className="menu">
                <Link to="/"><li>🏠Inicio</li></Link>
            </ul>

        </>
    )
}
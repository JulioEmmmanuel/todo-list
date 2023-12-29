import React from "react";
import "./NotFound.css";
import { FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NotFoundPage(){
    const navigate = useNavigate();

    const volverAHome = () => {
        navigate("/")
    }
    
    return(
        <div className="NotFound">
            <h2>No se encontró la página</h2>
            <FaSadTear className="SadIcon" size={120}/>
            <p>La página a la que intentaste acceder no existe u ocurrió un error</p>
            <button onClick={volverAHome}>Volver a la página de inicio</button>
        </div>
    )
}



export {NotFoundPage}
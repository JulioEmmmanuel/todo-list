import React from "react";
import { useStorageListener } from "../../Hooks/useStorageListener";
import "./ChangeAlert.css"
import { Modal } from "../Modal";

function ChangeAlert({sincronize, storageChange, setStorageChange}){
    const {show, toggleShow} = useStorageListener({storageChange, setStorageChange, sincronize});
    
    if(show){
        return (
            <div className="ModalBackground">
                <div className="ChangeAlert">
                    <p className="AlertTitle">Se realizaron cambios en otra pestaña</p>
                    <p className="AlertText">Es necesario volver a cargar la aplicación</p>
                    <button onClick={() => {toggleShow()}}>
                        Volver a cargar
                    </button>
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export {ChangeAlert}
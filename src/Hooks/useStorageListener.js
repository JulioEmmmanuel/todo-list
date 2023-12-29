import React from "react";

function useStorageListener({storageChange, setStorageChange, sincronize}){
        
    React.useEffect(() => {
        const onChange = (change) => {
            if(change.key === "TODOS_V2"){
                console.log("Hubo cambios en TODOS_V1");
                setStorageChange(true);
            }
        }

        window.addEventListener("storage", onChange)

        return () => {
            window.removeEventListener("storage", onChange)
        } 
    }, []);

    const toggleShow = () => {
        sincronize();
        setStorageChange(false);
    }
    
    return {
        show: storageChange,
        toggleShow
    }
}

export {useStorageListener};
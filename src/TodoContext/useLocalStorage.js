import React from "react";

function useLocalStorage(itemName, initialValue){

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    React.useEffect(() => {

        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
    
                if(localStorageItem){
                    let parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                }   
            
                setLoading(false);
                setError(false);
    
            } catch(error){
                setLoading(false);
                setError(true)
            }
        }, 2000)        

    }, [])
  
    const saveItem = (newItem)  => {
      setItem(newItem);
      localStorage.setItem(itemName, JSON.stringify(newItem));
    }
  
    return {
        item, 
        saveItem, 
        loading, 
        error};
}

export {useLocalStorage}
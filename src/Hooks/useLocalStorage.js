import React from "react";

function useLocalStorage(itemName, initialValue){

    const [state, dispatch] = React.useReducer(reducer, initialState(initialValue));
    const {
        sincronizedItem,
        error,
        loading,
        item
    } = state;

    //action creators
    const onError = (error) => dispatch({
        type: actionTypes.error, 
        payload: error
    })
    const onSucccess = (item) => dispatch({
        type: actionTypes.success, 
        payload: item
    })
    const onSave = (item) => dispatch({
        type: actionTypes.saved, 
        payload: item
    })
    const onSincronize = () => dispatch({
        type: actionTypes.sincronized
    })


    React.useEffect(() => {

        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
    
                let parsedItem;
                if(localStorageItem){
                    parsedItem = JSON.parse(localStorageItem);
                } else {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = JSON.parse(localStorageItem);
                }   
            
                onSucccess(parsedItem);
    
            } catch(error){
                onError(error)
            }
        }, 2000)        

    }, [sincronizedItem]);
  
    const saveItem = (newItem)  => {
        onSave(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem));
    }

    const sincronizeItem = () => {
        onSincronize();
    }
  
    return {
        item, 
        saveItem, 
        loading, 
        error,
        sincronizeItem
    };
}

const initialState = (initialValue) => ({
    sincronizedItem: true,
    error: false,
    loading: true,
    item: initialValue
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  saved: "SAVED",
  sincronized: "SINCRONIZED"
}

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.success]: {
        ...state,
        item: payload,
        loading: false,
        error: false,
        sincronizedItem: true
    },
    [actionTypes.saved]: {
        ...state,
        item: payload
    },
    [actionTypes.sincronized]: {
        ...state,
        loading: true,
        sincronizedItem: false
    }
})

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}

export {useLocalStorage}
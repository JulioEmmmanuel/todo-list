import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../Hooks/useTodos";

function NewTodoPage(){

    const {states, stateUpdaters} = useTodos();
    const {loading} = states;
    const {addItem} = stateUpdaters;

    if(loading){
        return <p>Cargando...</p>
    } else {
        return(
            <TodoForm
                label="Escribe tu nuevo TODO"
                submitText="Añadir TODO"
                submitEvent={(newText) => {addItem(newText)}}
            />
        )
    }

    
}

export {NewTodoPage}
import React from "react";
import { TodoForm } from "../../components/TodoForm";
import { useTodos } from "../../Hooks/useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage(){
    const location = useLocation();
    const {stateUpdaters, states} = useTodos();
    const {loading, getItem} = states;
    const {editItem} = stateUpdaters;

    const {id} = useParams();

    let todoText;

    if(location.state?.text){
        todoText = location.state.text;
    } else if(loading){
        return <p>Cargando...</p>
    } else {
        const todo = getItem(id);
        todoText = todo.text;
    }

    return(
        <TodoForm
            label="Edita el TODO"
            defaultTodoText={todoText}
            submitText="Editar"
            submitEvent={(newText) => {editItem(id, newText)}}
        />
    )
}

export {EditTodoPage}
import React from "react";
import { TodoForm } from "../../components/TodoForm";

function NewTodoPage(){
    return(
        <TodoForm
            label="Escribe tu nuevo TODO"
            submitText="Añadir un nuevo TODO"
            submitEvent={() => console.log("Llamar a addTodo")}
        />
    )
}

export {NewTodoPage}
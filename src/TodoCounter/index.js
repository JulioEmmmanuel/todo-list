import "./TodoCounter.css"
import React from "react";
import { TodoContext } from "../TodoContext"

function TodoCounter(){
    const {
      totalTodos: total, 
      completedTodos: completed
    } = React.useContext(TodoContext);

    return (
      <>
        {
          (total > 0 && total === completed) ?
          <h1 className="TodoCounter">
            ¡Felicidades! Has completado todas las tareas :)
          </h1>
          :
          <h1 className="TodoCounter">
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
          </h1>
        }
      </>
      
    )
}
  

export {TodoCounter}
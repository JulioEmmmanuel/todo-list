import "./TodoCounter.css"
import React from "react";

function TodoCounter({totalTodos: total, completedTodos: completed, loading}){

    return (
      <>
        {
          (total > 0 && total === completed) ?
          <h1 className="TodoCounter">
            ¡Felicidades! Has completado todas las tareas :)
          </h1>
          :
          <h1 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
          </h1>
        }
      </>
      
    )
}
  

export {TodoCounter}
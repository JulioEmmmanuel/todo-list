import "./CreateTodoButton.css"

function CreateTodoButton({loading, storageChange, onClick}){
    const shouldDisable = storageChange || loading;

    return (
        <button 
            disabled={shouldDisable}
            className={`createButton ${shouldDisable && "createButton--disabled"}`}
            onClick={onClick}>+</button>
    )
}

export {CreateTodoButton}
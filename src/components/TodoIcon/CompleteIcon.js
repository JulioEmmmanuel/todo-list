import {TodoIcon } from "./index"

function CompleteIcon({ completed, action }){
    return (
        <TodoIcon 
            type="check"
            color={completed ? "green" : "gray"}
            onClick={action}
        />
    );
}

export { CompleteIcon }
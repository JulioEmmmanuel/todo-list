import {TodoIcon } from "./index"

function DeleteIcon({action}){
    return (
        <TodoIcon 
            type="delete"
            color="gray"
            onClick={action}
        />
    );
}

export { DeleteIcon }
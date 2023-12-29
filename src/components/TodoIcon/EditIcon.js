import {TodoIcon } from "./index"

function EditIcon({action}){
    return (
        <TodoIcon 
            type="edit"
            color="gray"
            onClick={action}
        />
    );
}

export { EditIcon }
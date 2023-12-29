import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";
import { EditIcon } from "../TodoIcon/EditIcon";
import "./TodoItem.css"

function TodoItem({text, completed, onToggle, onEdit, onDelete}){
    
    return (
      <li className={`TodoItem ${completed && "TodoItem--complete"}`}>
        <CompleteIcon
          completed={completed}
          action={onToggle}
        />
        <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
        <EditIcon
          action={onEdit}
        />
        <DeleteIcon
          action={onDelete}
        />
      </li>
    )
  }

  export {TodoItem};
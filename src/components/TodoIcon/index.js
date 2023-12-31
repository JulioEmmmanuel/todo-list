import { ReactComponent as CheckSVG } from "./check.svg";
import { ReactComponent as DeleteSVG } from "./crossmark.svg";
import {ReactComponent as EditSVG} from "./edit.svg";
import "./TodoIcon.css";

const iconTypes = {
    "check": (color) => <CheckSVG fill={color}/>,
    "delete": (color) => <DeleteSVG fill={color}/>,
    "edit": (color) => <EditSVG fill={color}/>
};

function TodoIcon({ type, color, onClick }){
    return (
        <span 
            className={`Icon Icon-svg Icon-${type}`}
            onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };
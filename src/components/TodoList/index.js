import "./TodoList.css"

function TodoList(props){
    return (
        <ul className="TodoList">

            {props.error && props.onError()}

            {props.loading && props.onLoading()}

            {(!props.loading && props.totalTodos <= 0) && props.onEmptyTodos()}
            
            {(!props.loading && props.totalTodos > 0 && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchValue)}

            {!props.loading && props.searchedTodos.map(props.render || props.children)}
        </ul>
    )
}
  

export {TodoList}
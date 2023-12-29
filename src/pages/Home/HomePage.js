import React, { useEffect } from "react";
import "./HomePage.css"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { TodoCounter } from '../../components/TodoCounter';
import { TodoSearch } from '../../components/TodoSearch';
import { TodoList } from '../../components/TodoList';
import { TodoItem } from '../../components/TodoItem';
import { CreateTodoButton } from '../../components/CreateTodoButton';
import {TodosLoading} from "../../components/TodosLoading";
import {TodosError} from "../../components/TodosError";
import {EmptyTodos} from "../../components/EmptyTodos";
import { TodoHeader } from '../../components/TodoHeader';
import { useTodos } from "../../Hooks/useTodos";
import { EmptyResults } from "../../components/EmptyResults";
import { ChangeAlert } from "../../components/ChangeAlert";

function HomePage() {

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    states,
    stateUpdaters
  } = useTodos();

  const {
    completedTodos,
    totalTodos,
    searchValue,
    searchedTodos,
    loading,
    error,
    storageChange
  } = states;

  const {
    setSearchValue, 
    toggleItem,
    deleteItem,
    sincronizeTodos,
    setStorageChange
  } = stateUpdaters;

  useEffect(() => {
    if(searchParams.get("search")){
      setSearchValue(searchParams.get("search"));
    }  
  }, [])
  
  return (
    <div className="Home">
      <TodoHeader loading={loading}>
          <TodoCounter
              totalTodos={totalTodos}
              completedTodos={completedTodos}
          />
          <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
          />
      </TodoHeader>
  
      <TodoList
        error={error}   
        loading = {loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={(searchValue) => <EmptyResults searchValue={searchValue}/>}
        >
          {todo => (
            <TodoItem 
                key={todo.id} 
                text={todo.text} 
                completed={todo.completed}
                onToggle={() => {toggleItem(todo.id)}}
                onEdit={() => {navigate(`/edit/${todo.id}`, {state: {text: todo.text}})}}
                onDelete={() => {deleteItem(todo.id)}}
            />)
          }
      </TodoList>  

      <CreateTodoButton
        loading={loading}
        storageChange={storageChange}
        onClick={() => {navigate("/new")}}
      />

      <ChangeAlert
        storageChange={storageChange}
        setStorageChange={setStorageChange}
        sincronize={sincronizeTodos}/>
    </div>
  );
}


export {HomePage};
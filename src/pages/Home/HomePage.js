import React from "react";
import "./HomePage.css"

import { useNavigate } from "react-router-dom";
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
                onToggle={() => {toggleItem(todo)}}
                onEdit={() => {console.log("GOGOGOGO")}}
                onDelete={() => {deleteItem(todo)}}
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
import React from "react";
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid } from "uuid";

function useTodos(){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error,
        sincronizeItem: sincronizeTodos
      } = useLocalStorage("TODOS_V2", []);
    
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const [storageChange, setStorageChange] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase().trim();
        const searchText = searchValue.toLowerCase().trim();
        return todoText.includes(searchText);
    });

    const toggleItem = (item) => {
        const newTodos = [...todos];
        const selected = newTodos.find(todo => todo.id === item.id);
        selected.completed = !selected.completed; 
        saveTodos(newTodos);
    }

    const deleteItem = (item) => {
        const todosWithoutItem = todos.filter(todo => todo.id !== item.id);
        saveTodos(todosWithoutItem);
    }

    const addItem = (item) => {
        const newTodos = [...todos];
        const id = newTodoId();
        newTodos.push({
            text: item,
            completed: false,
            id: id
        });
        saveTodos(newTodos);
    }

    const newTodoId = () => {
        return uuid();
    }

    const states = {
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        loading,
        error,
        openModal,
        storageChange
    }

    const stateUpdaters = {
        setSearchValue, 
        addItem,
        toggleItem,
        deleteItem,
        setOpenModal,
        sincronizeTodos,
        setStorageChange
    }

    return { 
        states,
        stateUpdaters
    }
}

export {useTodos}
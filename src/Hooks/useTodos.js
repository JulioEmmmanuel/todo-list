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
    const [storageChange, setStorageChange] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase().trim();
        const searchText = searchValue.toLowerCase().trim();
        return todoText.includes(searchText);
    });

    const toggleItem = (id) => {
        const newTodos = [...todos];
        const selected = newTodos.find(todo => todo.id === id);
        selected.completed = !selected.completed; 
        saveTodos(newTodos);
    }

    const getItem = (id) => {
        const selected = todos.find(todo => todo.id === id);
        return selected;
    }

    const editItem = (id, newText) => {
        const newTodos = [...todos];
        const selected = newTodos.find(todo => todo.id === id);
        selected.text = newText; 
        saveTodos(newTodos);
    }

    const deleteItem = (id) => {
        const todosWithoutItem = todos.filter(todo => todo.id !== id);
        saveTodos(todosWithoutItem);
    }

    const addItem = (text) => {
        const newTodos = [...todos];
        const id = newTodoId();
        newTodos.push({
            text: text,
            completed: false,
            id: id
        });
        saveTodos(newTodos);
    }

    const newTodoId = () => {
        return uuid();
    }

    const states = {
        getItem,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        loading,
        error,
        storageChange
    }

    const stateUpdaters = {
        setSearchValue, 
        addItem,
        toggleItem,
        deleteItem,
        editItem,
        sincronizeTodos,
        setStorageChange,
    }

    return { 
        states,
        stateUpdaters
    }
}

export {useTodos}
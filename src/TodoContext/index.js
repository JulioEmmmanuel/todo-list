import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
      } = useLocalStorage("TODOS_V1", []);
    
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase().trim();
        const searchText = searchValue.toLowerCase().trim();
        return todoText.includes(searchText);
    });

    const toggleItem = (item) => {
        const newTodos = [...todos];
        const selected = newTodos.find(todo => todo.text === item.text);
        selected.completed = !selected.completed; 
        saveTodos(newTodos);
    }

    const deleteItem = (item) => {
        const todosWithoutItem = todos.filter(todo => todo.text !== item.text);
        saveTodos(todosWithoutItem);
    }

    const addItem = (item) => {
        const newTodos = [...todos];
        newTodos.push({
            text: item,
            completed: false
        });
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
                completedTodos, 
                totalTodos, 
                searchValue, 
                setSearchValue, 
                searchedTodos,
                addItem,
                toggleItem,
                deleteItem,
                loading,
                error,
                openModal,
                setOpenModal
            }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}
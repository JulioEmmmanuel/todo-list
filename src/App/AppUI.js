import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import React from 'react';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import {TodosLoading} from "../TodosLoading";
import {TodosError} from "../TodosError";
import {EmptyTodos} from "../EmptyTodos";

import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

function AppUI(){
    const {
        loading,
        error,
        searchedTodos,
        totalTodos,
        toggleItem,
        deleteItem,
        openModal
    } = React.useContext(TodoContext)


    return (
        <div className="App">
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>    
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && totalTodos <= 0) && <EmptyTodos/>}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onToggle={() => {toggleItem(todo)}}
                    onDelete={() => {deleteItem(todo)}}
                />))}
            </TodoList>            
            <CreateTodoButton/>

            {openModal && (
                <Modal>
                    La funcionalidad de agregar todo
                </Modal>
            )}
        </div>
    )
}

export {AppUI};
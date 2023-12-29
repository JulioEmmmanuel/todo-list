import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom"
import { HomePage } from "../pages/Home/HomePage";
import { NewTodoPage } from "../pages/New/NewTodoPage";
import { EditTodoPage } from "../pages/Edit/EditTodoPage";
import { NotFoundPage } from "../pages/NotFound/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/new" element={<NewTodoPage/>}/>
        <Route path="/edit/:id" element={<EditTodoPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </HashRouter>
    )
}


export {App};
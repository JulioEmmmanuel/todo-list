import "./TodoSearch.css"
import React from "react";

function TodoSearch({searchValue, setSearchValue, loading}){
    return (
      <input 
        className="TodoSearch" 
        placeholder="Cortar cebolla"
        disabled={loading}
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}/>
    )
}

export {TodoSearch}
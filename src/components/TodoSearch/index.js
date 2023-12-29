import { useSearchParams } from "react-router-dom";
import "./TodoSearch.css"
import React from "react";

function TodoSearch({searchValue, setSearchValue, loading}){
    const [searchParams, setSearchParams] = useSearchParams();


    return (
      <input 
        className="TodoSearch" 
        placeholder="Cortar cebolla"
        disabled={loading}
        value={searchValue}
        onChange={(event) => {
          setSearchParams({search: event.target.value});
          setSearchValue(event.target.value);
        }}/>
    )
}

export {TodoSearch}
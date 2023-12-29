import React from "react";

function EmptyResults({searchValue}){
    return (
      <p>No se encontraron resultados para {searchValue}</p>
    )
}

export {EmptyResults}
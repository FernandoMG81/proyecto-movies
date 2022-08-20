import React, { useState, useRef, useEffect } from "react";

export const SearchBar = ({listState, setListState}) => {

  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState(false)
  var first = useRef(true);


  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    let foundMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

    if(search.length <= 1 || foundMovies.length <= 0)
    {
      foundMovies = JSON.parse(localStorage.getItem('movies'))
      setNotFound(true)
    }
    else{
      setNotFound(false)
    }

    setListState(foundMovies)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  


  const searchMovie = (e) => {
    setSearch (e.target.value)  
  }


  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {(notFound && search.length > 2)&& (
        <span className="not_found">No se han encontrado coincidencias</span>
      )}
      <form>
        <input type="text" 
              id="search_field" 
              name="search"
              autoComplete="off"
              onChange={searchMovie}/>
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

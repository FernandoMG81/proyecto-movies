import React, { useEffect, useState } from "react";
import { EditMovie } from "./EditMovie";


export const List = ({listState, setListState}) => {
  //const [listState, setListState] = useState([]);

  const [edit, setEdit] = useState(0)


  //Carga el listado al inicio
  useEffect(() => {
    getMovies()
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies)

    return movies
  };

  const deleteMovie = (id) => {
    let movieList = getMovies()

    let newMovieList = movieList.filter(movie => movie.id !== parseInt(id))

    setListState(newMovieList)

    localStorage.setItem('movies', JSON.stringify(newMovieList))
  }

  

  
  return (
    <>
      {listState ? listState.map((movie) => {
        return (
          <article key={movie.id} className="peli-item">
            <h3 className="title">{movie.title}</h3>
            <p className="description">{movie.description}</p>

            <button className="edit" onClick={() => {setEdit(movie.id)}}>Editar</button>
            <button className="delete" onClick={() => {deleteMovie(movie.id)}}>Borrar</button>

            {/*Seccion de editar */}
            {edit === movie.id && (
              <EditMovie movie={movie} 
                        getMovies={getMovies}
                        setEdit={setEdit}
                        setListState={setListState}/>
            )}
          </article>
        );
      })
    :
    <h2>No hay peliculas para mostrar</h2>
    
    }
    </>
  );
};

import React, { useEffect } from "react";
import { SaveOnLocalStorage } from "../helpers/SaveOnLocalStorage";

export const List = ({listState, setListState}) => {
  //const [listState, setListState] = useState([]);
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

            <button className="edit">Editar</button>
            <button className="delete" onClick={() => {deleteMovie(movie.id)}}>Borrar</button>
          </article>
        );
      })
    :
    <h2>No hay peliculas para mostrar</h2>
    
    }
    </>
  );
};

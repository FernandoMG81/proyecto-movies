import React, { useState } from "react";
import { SaveOnLocalStorage } from "../helpers/SaveOnLocalStorage";

export const AddMovie = () => {

    const componentTitle = "Añadir película"
    const [movieState, setMovieState] = useState({
        title: "",
        description: ""
    })
    const {title, description} = movieState

    const getFormValues = e => {
        e.preventDefault()

        let title = e.target.title.value
        let description = e.target.description.value

       let movie = {
        id: new Date().getTime(),
        title,
        description
       }
       setMovieState(movie)

       SaveOnLocalStorage('movies', movie)
    }

   
    
  return (
    <div className="add">
      <h3 className="title">{componentTitle}</h3>
        <strong>
            { (title && description) && "Has creado la pelicula: "+ title}
        </strong>

      <form onSubmit={getFormValues}>
        <input type="text" 
               id="title"
               name="title" 
               placeholder="Titulo" />

        <textarea id="description"
                  name="description"
                  placeholder="Descripción"></textarea>

        <input type="submit"
               id="save" 
               value="Guardar" />
      </form>
    </div>
  );
};

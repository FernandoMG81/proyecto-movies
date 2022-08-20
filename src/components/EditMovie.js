import React from 'react'

export const EditMovie = ({movie, getMovies, setEdit, setListState}) => {

    const componentTitle = "Editar Pelicula"

    const saveEdit = (e, id) => {
        e.preventDefault()

        let movies = getMovies()
        const index = movies.findIndex(movie => movie.id === id)

        let movieUpdate = {
            id,
            title: e.target.title.value,
            description: e.target.description.value
        }

        movies[index] = movieUpdate
        
        localStorage.setItem('movies',JSON.stringify(movies))

        setListState(movies)
        setEdit(0)

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{componentTitle}</h3>
        <form onSubmit={e => saveEdit(e, movie.id)}>
            <input type='text'
                    name='title'
                    className='edit_title'
                    defaultValue={movie.title}/>
            <textarea name='description'
                        defaultValue={movie.description}
                        className='edit_description' />
            <input type='submit' className='edit' value='Actualizar'/>
        </form>
    </div>
  )
}

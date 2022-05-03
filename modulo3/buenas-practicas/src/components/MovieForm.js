
/*
    Este componente sirve para agrupar todos los elementos dentro de un formulario y
  tenerlos todos "a mano" y agrupados bajo un mismo componente.
    A cada componente le va a pasar la función de App para cambiar los datos y el valor que tiene.
*/

function MovieForm(props) {

    // Nos llega por props:
    //  - props.newMovie (que a su vez contiene)
    //      - newTitle
    //      - newSynopsis
    //  - props.changeData (la función que cambia el estado en App)
    //  - props.addMovie   (función que añade una película a la lista de películas en App)

    const handleNewMovie = (ev) => {
        // En este formulario sucede cuando hacemos click en el botón o cuando
        ev.preventDefault();
        props.addMovie();
    }


    const handleInput = (ev) => {
        const nombreInput = ev.target.id;
        const valueInput = ev.target.value;
        props.changeData(nombreInput, valueInput);
    }

    return (
        <>

            <form className="movies__new" action="">
                <label htmlFor=""> Nombre</label>
                <input type="text" id="name" value={props.newMovie.name} onChange={handleInput} />

                <label htmlFor=""> Descripción</label>
                <input type="text" id="synopsis" value={props.newMovie.synopsis} onChange={handleInput} />
                <button className="movies__button" onClick={handleNewMovie}>Guardar</button>
            </form>
        </>
    )
}

export default MovieForm;
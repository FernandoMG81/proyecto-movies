import { SearchBar } from "./components/SearchBar";
import { List } from "./components/List";
import { AddMovie } from "./components/AddMovie";
import { useState } from "react";

function App() {

    const [listState, setListState] = useState([]);
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>MisPelis</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">

            {/*aqui van las peliculas*/}
            <List listState={listState} setListState={setListState}/>
        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            
            <SearchBar listState={listState} setListState={setListState}/>

            <AddMovie setListState={setListState}/>

        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React - Fernando Gordillo
        </footer>

    </div>
  );
}

export default App;

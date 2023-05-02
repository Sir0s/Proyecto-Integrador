import { useState } from 'react';
import axios from 'axios';
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';


function App() {
  
  const [characters, setCharacters] = useState([]);

  /*-------------------------------------------------------------*/
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          if (characters.some((char) => char.id === data.id)) {
            window.alert("¡Este personaje ya está en la lista!");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  /*----------------------------------------------------------------------*/
  function onClose(id) {
    const newCharacters = characters.filter((char) => char.id !== id);
    setCharacters(newCharacters);
  }

  return (
    <div className={styles.app}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>    
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';



function App() {
  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const navigate = useNavigate();
  const email = 'mail@mail.com';
  const password = '123456';



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


  function login(userData) {
    if (userData.password === password && userData.email === email) {
       setAccess(true);
       navigate('/home');
    }
 }
 
 useEffect(() => {
   !access && navigate('/');
 }, [access]);

 
const {pathname} = useLocation();
  return (
    <div className={styles.app}>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/' element={<Form login={login}/>} />  
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        
      </Routes>    
    </div>
  );
}

export default App;

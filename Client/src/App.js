import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';



function App() {
  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false)
  const navigate = useNavigate();
  const email = 'mail@mail.com';
  const password = '123456';

  async function login(userData) {
    try {
       const { email, password } = userData;
       const URL = 'http://localhost:3001/rickandmorty/login/';
       const { data } = await axios(URL + `?email=${email}&password=${password}`)
       const { access } = data;
       setAccess(data);
       access ? navigate('/home'): window.alert("User or pass invalid")
    } catch (error) {
       console.log(error)
    }
 }

  /*-------------------------------------------------------------*/
  async function onSearch(id) {
    try {
       const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
       setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
       window.alert(error.response.data);
    }
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
      {access && (
        <>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path = "/favorites" element={<Favorites />} />
        </>
      )}
      </Routes>    
    </div>
  );
}

export default App;

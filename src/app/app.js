import { useState } from 'react'
import Header from '../header/header';
import Main from '../main/main';
import Modal from '../modal/modal';
import Sidebar from '../sidebar/sidebar';
import './app.css'

let width = null;

function getWidth() {
  width = document.body.clientWidth;
  console.log(width);
  return width;
}

function App() {
  const [modalActive, setModalActive] = useState()//отвечает за состояние модалки

  getWidth();

  return (
    <div className="app">
      {width > 600 && <Sidebar/>}
      <div className="content-page">
        <button  onClick = {() => setModalActive(true)}></button>
        <Header/>
        <Main/>      
        <Modal 
        active = {modalActive} 
        setActive = {setModalActive}/>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import './App.css';

function App() {
  const[user,setUser]=useState('Tomas')


  return (
    <div style={{ paddingTop: '80px' }}>
      <h2 className='bienvenido'>!Bienvenido {user} a VirtualPadelStore¡</h2>
      <NavBar />
      <ItemListContainer productos="" />
    </div>
  );
}

export default App;
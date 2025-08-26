import React from 'react';
import NavBar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';
import './App.css';

function App() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a VirtualPadelStore!" />
    </div>
  );
}

export default App;
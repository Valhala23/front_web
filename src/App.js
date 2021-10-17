import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rotas from './componentes/rotas';
import Produto from './componentes/Produto';
import Login from './componentes/Login';
function App() {

  return (
    <div>
      <Rotas/>
      <Produto/>      
    </div>
  );
}

export default App;

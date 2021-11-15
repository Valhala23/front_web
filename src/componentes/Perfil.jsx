import React from 'react';
import './estilos/Perfil.css'
import	{ useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function Perfil(){
    const history = useHistory();
    // history.push('/Perfil');
    return(
        <div>
            <h1>Perfil usuário </h1>
        </div>
    );    
}


export default Perfil;

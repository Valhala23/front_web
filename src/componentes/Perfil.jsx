import React from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const Perfil = modelo => {
    
    const { nome } =
    (modelo.location && modelo.location.state) || {};

    return(
        <div>
            <NavLink to="/" activeClassName="active">
                Go Back
            </NavLink>

            <h1>Perfil usuário </h1>
            {/* <h2>Token: {console.log(props)} </h2> */}
            <h2>Token: {nome} </h2> 
            {/* <h2>location state: {console.log(usuario)} </h2>  */}
            {/* <h2>Token: {console.log(JSON.stringify(props.nome))} </h2> 
            <h2>Token: {console.log(JSON.stringify(props.props))} </h2>  */}
             {/* <h2>Nome:  {console.log(props)} </h2> */}
        </div>
    );    
}


export default Perfil;

import React from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function Perfil(props){
    
    const { nome } = 'nada';
    const location = useLocation();

    return(
        <div>
            <NavLink to="/" activeClassName="active">
                Go Back
            </NavLink>

            <h1>Perfil usuário </h1>
            <h2>Nome: {location.usuario.nome} </h2>
            <h2>Apelido: {location.usuario.apelidoLogin} </h2>
            <h2>Bio: {location.usuario.bio} </h2>
            <h2>Descrição: {location.usuario.descricao} </h2>
            <h2>sexo: {location.usuario.sexo} </h2>
            <h2>historico: {location.usuario.historico} </h2>
            <h2>contato: {location.usuario.contato} </h2>
            <h2>foto: {location.usuario.foto} </h2>
            <h2>permissao: {location.usuario.permissao} </h2>
            <h2>Token: {console.log(localStorage.getItem('token'))} </h2>            
        </div>
    );    
}


export default Perfil;

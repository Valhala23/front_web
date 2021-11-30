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
            <div className="cabecalho">
                <h1>Perfil usuário </h1>
            </div>
                
            <div className="foto">
                <h2>foto: {location.usuario.foto} </h2>
            </div>
                    
            <div className="container">    
                <div className="informacoes">
                    <div className="row">
                        <div className="col">
                            <h2>Nome: {location.usuario.nome} </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                                <h2>Apelido: {location.usuario.apelidoLogin} </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Bio: {location.usuario.bio} </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Descrição: {location.usuario.descricao} </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>sexo: {location.usuario.sexo} </h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>historico: {location.usuario.historico} </h2>
                            </div>
                        </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="contato">
                            <h2>contato: {location.usuario.contato} </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <div className="col">
                        <div className="nivel">
                            <h2>permissao: {location.usuario.permissao} </h2>
                        </div>
                    </div>
                </div>
                <h2>Token: {console.log(localStorage.getItem('token'))} </h2>            

                <div className="row">
                    <section className="link">
                    <NavLink to="/" activeClassName="active">
                            Go Back
                    </NavLink>
                    </section>
                </div>
            </div>
        </div>
    );    
}


export default Perfil;

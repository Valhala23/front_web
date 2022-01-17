import React, { Component, useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditarPerfil2 = (props) =>{ 
    
    const location = useLocation();      
    return(
        <div>
            <div className="cabecalho">
                <h1>Perfil usuário </h1>
            </div>

            <div className="container">  
                <div className="row">
                    <div className="col-6">
                        <h2>Nome: </h2>
                        {/* onChange={handleChange} */}
                        <input type="text" value={location.state.usuario.nome} name="nome"  />                        
                    </div>

                    <div className="col">
                        <div className="foto">
                            <h2>foto: {location.state.usuario.foto} </h2>
                            <img className="playerProfilePic_home_tile" ></img>
                        </div>
                    </div>
                </div>

                <div className="informacoes">
                    <div className="row">
                        <div className="col">
                            <h2>Bio: </h2>
                            <input type="text" value={location.state.usuario.bio} name="nome"  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Descrição: </h2>
                            <input type="text" value={location.state.usuario.descricao} name="nome"  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>sexo: </h2>
                            <input type="text" value={location.state.usuario.sexo} name="nome"  />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>historico: </h2>
                            <input type="text" value={location.state.usuario.historico} name="nome"  />
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col">
                            <div className="contato">
                                <h2>contato: </h2>
                                <input type="text" value={location.state.usuario.contato} name="nome"  />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="nivel">
                                <h2>permissao: {location.state.usuario.permissao} </h2>
                                <input type="text" value={location.state.usuario.permissao} name="nome"  />
                            </div>
                        </div>
                        <div className="col">
                            <button >Postar foto</button>
                        </div>
                    </div>
                </div>
                
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


export default EditarPerfil2;

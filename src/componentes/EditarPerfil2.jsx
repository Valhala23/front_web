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
                        <input type="text" value={location.state.nome} name="nome"  />
                        {console.log(location.state.nome)}
                        
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

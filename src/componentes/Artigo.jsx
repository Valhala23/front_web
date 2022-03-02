import React, { Component, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Esp32.scss';

function Artigo(){
    var logado  = false;

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Lista de Artigos publicados </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="toggle-switch">
                            <h2>Titulo;</h2>
                            <p>Descrição:</p>
                            <p>Imagem</p>
                            <p>tags / participantes </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );    
}


export default Artigo;

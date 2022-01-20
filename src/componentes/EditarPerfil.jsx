import React, { Component, useState, useEffect} from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../servicos/api'
import fotoPerfilPadrao from '../assets/fotoPadrao.png'
function Perfil(props){    
    const location = useLocation();    
    const dados = new FormData()
    const [picture, setPicture] = useState(fotoPerfilPadrao);
    var [imgDados, setImgDados] = useState(fotoPerfilPadrao);
    
    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]) );
        setImgDados(imgDados = e.target.files[0]);
    };

    const config = {
        'Content-Type': 'multipart/form-data',
    }

    async function enviarDados(){
        try 
        {
            //const resposta = await api.post('https://localhost:44390/api/Usuario/postarfotoperfil', dados);            
            await dados.append('arquivo', imgDados, location.usuario.nome)
            // await api.post('https://localhost:44390/api/Usuario/upload', dados, config).then(res => {
            await api.post('https://localhost:44390/api/imagem/upload', dados)
            // .then(res => {
            // console.log(res.data + 'this is data after api call');         
            // })
        }catch(erro)
        {
            alert("Erro ao postar foto " + erro);  
        }
    }    

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
                        <input type="text" value={location.usuario.nome} name="nome"  />
                    </div>
                    <div className="col">
                        <h2>Apelido: </h2>
                        {/* onChange={handleChange} */}
                        <input type="text" value={location.usuario.apelidoLogin} name="nome"  />
                    </div>
                    <div className="col">
                        <div className="foto">
                            <h2>foto: {location.usuario.foto} </h2>
                            <img className="playerProfilePic_home_tile"  src={picture && picture}></img>
                        </div>
                    </div>
                </div>                       
              
                <div className="informacoes">
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
                    <div className="row">
                        <div className="col">
                            <div className="contato">
                                <h2>contato: {location.usuario.contato} </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="nivel">
                                <h2>permissao: {location.usuario.permissao} </h2>
                            </div>
                        </div>
                        <div className="col">
                            <input id="profilePic" type="file" onChange={onChangePicture}/>
                        </div>
                        <div className="col">
                            <button onClick={enviarDados}>Postar foto</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Token: {console.log(localStorage.getItem('token'))} </h2>
                    </div>
                    <div className="col">
                        <button >Editar</button>
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


export default Perfil;
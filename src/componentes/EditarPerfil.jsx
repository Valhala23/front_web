import React, { Component, useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../servicos/api'
import fotoPerfilPadrao from '../assets/fotoPadrao.png'
function Perfil(props){    

    const history = useHistory();
    var [usuariolog, setUsuariolog]=useState(
        {
          id: 0,
          nome: '',
          apelidoLogin: '',
          senha: '',
          permissao: 0
        }
    );
    
    const handleChange = e=> 
    {
        // Montar objeto usuario
        const {name, value}=e.target;
        setUsuariolog(
        {
            ...usuariolog,
            [name]: value
        });        
    }

    const editarUsuario = async()=>{
        // com o objeto usuario recebido pegar id e enviar para o metodo update                
        // location.state.state.usuario.id
        try {
            await api.put('http://localhost:5001/api/Usuario/'+ usuariolog.id, usuariolog)
            .then(async response => {
              history.push({ pathname: '/Perfil',  usuario: usuariolog })
            }).catch(error=> {
              console.log(error);
            })            
        } catch (error) {
            //history.push('/');
            alert('Não foi possível atualizar: ' + error);
        }
      } 

    
    // const location = useLocation();      

    return(
        <div>
            <div className="cabecalho">
                <h1>Perfil usuário </h1>
            </div>
            <div className="container">
                <form action="/salvausuario" method="post">


                    <div className="row">
                        <div className="col-md-6">
                            <h2>Nome: </h2>
                            {/* onChange={handleChange} */}
                            <input type="text" name="nomeCompleto"  />
                        </div>
                        <div className="col-md-6">
                            <h2>Apelido: </h2>
                            {/* onChange={handleChange} */}
                            <input type="text" name="nome"  />
                        </div>
                    </div>                       
                
                    <div className="informacoes">
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Bio:  </h2>
                                <input type="text" name="bio"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Descrição:  </h2>
                                <input type="text" name="descricao"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Curso:  </h2>
                                <input type="text" name="curso"  />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Observação:  </h2>
                                <input type="text" name="observacao"  />
                            </div>
                        </div>                
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contato">
                                    <h2>contato:  </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="nivel">
                                    <h2>Grau:  </h2>
                                    <input type="text" name="grau"  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="foto">
                                <h2>foto: {} </h2>
                                <img className="playerProfilePic_home_tile"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <button onClick >Buscar foto</button>
                        </div>
                        <div className="col-md-2">
                            <button onClick >Postar foto</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button type='submit' >Salvar</button>
                        </div>
                    </div>
                    <div className="row">
                        <section className="link">
                        <NavLink to="/" activeClassName="active">
                                Go Back
                        </NavLink>
                        </section>
                    </div>
                </form>  
            </div>            
        </div>
    );    
}


export default Perfil;

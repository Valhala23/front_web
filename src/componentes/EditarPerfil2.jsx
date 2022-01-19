import React, { Component, useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../servicos/api'

const EditarPerfil2 = (props) =>{ 

    const [data, setData]=useState([]);
    const [usuariolog, setUsuariolog]=useState(
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
        // location.state.usuario.id
        try {
            await api.post('https://localhost:44390/api/Usuario/cadastrarnovo', usuariolog)
            .then(async response => {
              setData(response.data);
              //history.push('/');
            }).catch(error=> {
              console.log(error);
            })            
        } catch (error) {
            //history.push('/');
        }
      } 

    
    const location = useLocation();      
    return(
        <div>
            <div className="cabecalho">
                <h1>Edição do perfil </h1>
            </div>

            <div className="container">  
                <div className="row">
                    <div className="col">
                        <button style={{float: 'right'}} >Postar foto</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h2>Nome: </h2>
                        {/* onChange={handleChange} */}
                        <input type="text" placeholder={location.state.usuario.nome} name="nome" onChange={handleChange}  />                        
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
                            <input type="text" placeholder={location.state.usuario.bio} name="bio"  onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Descrição: </h2>
                            <input type="text" placeholder={location.state.usuario.descricao} name="descricao"  onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>sexo: </h2>
                            <input type="text" placeholder={location.state.usuario.sexo} name="sexo"  onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>historico: </h2>
                            <input type="text" placeholder={location.state.usuario.historico} name="historico"  onChange={handleChange} />
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col">
                            <div className="contato">
                                <h2>contato: </h2>
                                <input type="text" placeholder={location.state.usuario.contato} name="contato"  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="nivel">
                                <h2>permissao: {location.state.usuario.permissao} </h2>
                                <input type="text" placeholder={location.state.usuario.permissao} name="permissao"  onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button style={{float: 'right'}} type="button" className="btn btn-secondary" onClick={()=> editarUsuario()}>Cadastrar</button>
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

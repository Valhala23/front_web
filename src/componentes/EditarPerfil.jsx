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

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;

    // usuariolog = location.state.usuario
  }, []);

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
                <div className="row">
                    <div className="col-6">
                        <h2>Nome: </h2>
                        {/* onChange={handleChange} */}
                        <input type="text" name="nome"  />
                    </div>
                    <div className="col">
                        <h2>Apelido: </h2>
                        {/* onChange={handleChange} */}
                        <input type="text" name="nome"  />
                    </div>
                    <div className="col">
                        <div className="foto">
                            <h2>foto: {} </h2>
                            <img className="playerProfilePic_home_tile"></img>
                        </div>
                    </div>
                </div>                       
              
                <div className="informacoes">
                    <div className="row">
                        <div className="col">
                            <h2>Bio:  </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Descrição:  </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>sexo:  </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>historico:  </h2>
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col">
                            <div className="contato">
                                <h2>contato:  </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="nivel">
                                <h2>permissao:  </h2>
                            </div>
                        </div>
                        <div className="col">
                            {/* <input id="profilePic" type="file" onChange={onChangePicture}/> */}
                        </div>
                        <div className="col">
                            <button onClick >Postar foto</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Usuário
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

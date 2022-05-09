import React, { Component, useState, useEffect} from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Perfil(props){    
    const location = useLocation();    
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
    
    async function postarFoto(){
        console.log('tentou postar')
        return 
    }

    return(
        <div>
            <div className="cabecalho">
                <h1>Perfil usuário </h1>
            </div>

            <div className="container">  
                <div className="row">
                    <div className="col-6">
                        {/* <h2>Nome: {location.usuario.nome} </h2> */}
                        <h2>Nome: {location? null : location.usuario.nomelogin}  </h2>
                    </div>
                    <div className="col">                        <h2>Apelido: {location? null : location.usuario.nomelogin} </h2>
                    </div>
                    <div className="col">
                        <div className="foto">
                            {/* <h2>foto: {location.usuario.foto} </h2> */}

                            {imageUrl && selectedImage && (
                            <Box mt={2} textAlign="center">
                                <div>Foto Perfil:</div>
                                <img src={imageUrl} alt={selectedImage.name} height="100px" />
                            </Box>
                            )}
                        </div>
                    </div>
                </div>                       
              
                <div className="informacoes">
                    <div className="row">
                        <div className="col">
                            {/* <h2>Bio: {location.usuario.bio} </h2> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <h2>Descrição: {location.usuario.descricao} </h2> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <h2>sexo: {location.usuario.sexo} </h2> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <h2>historico: {location.usuario.historico} </h2> */}
                        </div>
                    </div>                
                    <div className="row">
                        <div className="col">
                            <div className="contato">
                                {/* <h2>contato: {location.usuario.contato} </h2> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="nivel">
                                {/* <h2>permissao: {location.usuario.permissao} </h2> */}
                            </div>
                        </div>
                        <div className="col">

                            <input
                                accept="image/*"
                                type="file"
                                id="select-image"
                                style={{ display: 'none' }}
                                onChange={e => setSelectedImage(e.target.files[0])}
                            />
                            <label htmlFor="select-image">
                                <Button variant="contained" size='small' color="secondary" component="span">
                                    Buscar foto
                                </Button>
                            </label>
                        </div>
                        <div className="col">
                            {/* <button onClick={enviarDados}>Postar foto</button> */}
                            <button onClick={postarFoto} >
                                Postar foto
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>Token: </h2>
                        {/* <h2>Token: {console.log(localStorage.getItem('token'))} </h2> */}
                    </div>
                    {/* <div className="col">
                        <Link                         
                            to={{ pathname: "/EditarPerfil",  state:{usuario: location.usuario}}} className="btn btn-light" >Editar</Link>
                    </div> */}
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

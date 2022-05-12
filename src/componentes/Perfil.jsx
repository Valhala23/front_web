import React, { Component, useState, useEffect} from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Perfil(props){    

    const userUrl ="http://localhost:3033/getusuario";
    const baseUrl ="http://localhost:3033/postaFt";
    const baseUrlExterno ="http://45.191.187.35:3033/postaFt";

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    var [usuarioData, setUsuarioData] = useState(null);
    
    useEffect(() => {   
        imagemGet();     
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
    

    // codigo para postar foto inicio
    function postarFoto () {
        if (!selectedImage) {
            return
        }
        const formData = new FormData();
        formData.append('image', selectedImage);
        axios.post(baseUrl,formData)
            .then(res => {
                    alert("Imagem salva com sucesso.")
            })
    };
    // fim postar foto    
    
    const imagemGet = async()=>{
        if(!selectedImage){
          await axios.get(userUrl, 
            { headers: {          
                Authorization: 'Bearer ' + localStorage.getItem('tokens').toString() 
            }
          })
          .then(response => {              
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            
            //console.log(response.data);
            console.log('carrega foto');
            setUsuarioData(response.data);            

            setImageUrl('data:image/jpeg;base64,' + usuarioData.fotoPerfil)
          }).catch(error=> {
            console.log(error);
          })
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
                        <h2>Nome Completo: {usuarioData? usuarioData.nomeCompleto : null}  </h2>
                    </div>
                    <div className="col">                        
                        <h2>Apelido: {usuarioData? usuarioData.login.nomelogin : null} </h2>
                    </div>
                    <div className="col">
                        <div className="foto">                            
                            {/* {usuarioData? <img src={`data:image/png;base64,${usuarioData.fotoPerfil} `} /> : null} */}
                            {usuarioData? <img style={{ width: "95%", height: "85%", margin: "10px 5px" }} src={imageUrl} /> : null}

                            {imageUrl && selectedImage && (
                            <Box mt={2} textAlign="center">
                                <div>Foto Perfil:</div>
                                <img src={imageUrl} alt={imageUrl.name} height="100px" />
                            </Box>
                            )}
                        </div>
                    </div>
                </div>                       
              
                <div className="informacoes">
                    <div className="row">
                        <div className="col">
                            <h2>Bio: {usuarioData? usuarioData.bio : null} </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Descrição: {usuarioData? usuarioData.descricao : null} </h2>
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
                
                    <div className="col">
                        {/* <button onClick={enviarDados}>Postar foto</button> */}
                        <button onClick={imagemGet} >
                            Mostrar foto
                        </button>
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

import React, { useState, useEffect} from 'react';
import './estilos/Perfil.css'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function Perfil(props){    

    const baseUrl ="http://localhost:3033/postaFt";
    const baseUrlExterno ="http://45.191.187.35:3033/postaFt";

    const location = useLocation();    
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);
    

    // codigo para postar foto inicio
    function postarFoto () {
        const formData = new FormData();
        formData.append('image', selectedImage);
        axios.post(baseUrl,formData)
            .then(res => {
                    console.log(res.data);
                    alert("File uploaded successfully.")
            })
    };
    // fim postar foto

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

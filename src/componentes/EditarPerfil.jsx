import React, { Component, useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './estilos/EditarPerfil.css'
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../servicos/api'
import Button from '@material-ui/core/Button';

function Perfil(props){ 
    const baseUrl ="http://localhost:3033/salvausuario";
    const baseUrlExterno ="http://45.191.187.35:3033/salvausuario";
    const [selectedImage, setSelectedImage] = useState(null); 
    const history = useHistory();        
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {   
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
            usuariolog.fotoPerfil = imageUrl
        }
        
      }, [selectedImage]);
    // Modelo do usuario a ser salvo
    const [usuariolog, setUsuariolog]=useState(
        {
          codigo: 0,
          nomeCompleto: '',
          bio: '',
          curso: '',
          descricao: '',
          observacao: '',
          grau: '',
          fotoPerfil: null
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
    
    async function usuarioEdita(){                

        try {
            await api.post(baseUrl, usuariolog, 
                { headers: {          
                    Authorization: 'Bearer ' + localStorage.getItem('tokens').toString() 
                }
                })        
            .then(async response => {
              // setData(response.data);
              if(response.data){
                history.push('/');
              }else{
                console.log("error ao cadastrar usuario");    
              }
            }).catch(error=> {
              console.log(error);
            })            
        } catch (error) {
            console.log(error);
        }
      }   
      
          // codigo para postar foto inicio
    function postarFoto () {
        if (!selectedImage) {
            return
        }

        const formData = new FormData();
        formData.append('image', selectedImage);
        api.post(baseUrlExterno, formData,
            {          
                headers: {          
                    Authorization: 'Bearer ' + localStorage.getItem('tokens').toString()            
                }
            })
            .then(res => {
                    alert("Imagem salva com sucesso.")
            })
    };
    // fim postar foto  

    return(
        <div>
            <div className="cabecalho">
                <h1>Perfil usuário </h1>
            </div>
            <div className="container">

                <div className="informacoes">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Nome: </h2>
                            <input type="text" name="nomeCompleto" onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                            <h2>Bio: </h2>
                            <input type="text" name="bio" onChange={handleChange} />
                        </div>
                    </div>                    
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Bio:  </h2>
                                <input type="text" name="bio" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Descrição:  </h2>
                                <input type="text" name="descricao" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Curso:  </h2>
                                <select style={{marginLeft: "50px"}} onChange={handleChange}>
                                    <option value="">Selecione o curso </option>
                                    <option value="comp">Eng. Computação </option>
                                    <option value="elet">Eng. Eletrica </option>
                                    <option value="prod">Eng. Produção </option>
                                    <option value="meca">Eng. Mecanica </option>
                                </select>
                            </div>
                            <div className="col" style={{marginLeft: '25%'}}>
                                <input
                                    accept="image/*"
                                    type="file"
                                    id="select-image"
                                    style={{ display: 'none' }}
                                    onChange={e => setSelectedImage(e.target.files[0])}/>
                                <label htmlFor="select-image">
                                    <Button variant="contained" size='small' color="secondary" component="span">
                                        Buscar foto
                                    </Button>
                                </label>                                                        
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Observação:  </h2>
                                <input type="text" name="observacao" onChange={handleChange} />
                            </div>
                        </div>                
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contato">
                                    <h2>contato: </h2>
                                    <input type="text" name="grau" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="col">
                                <button onClick={()=> usuarioEdita()} >Salvar</button>
                            </div>
                        </div>
                    </div>
                <div className='container'>
                        <div className="foto" style={
                            { display: 'flex', marginLeft: '75%', marginTop: '-35%'}}>
                            {selectedImage? <img style={{ width: "90%", height: "85%", margin: "10px" }} src={imageUrl} /> : null}
                        </div>       
                </div>       
            </div>            
        </div>
    );    
}


export default Perfil;

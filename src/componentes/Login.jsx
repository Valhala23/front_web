import React, { useEffect, useState } from 'react';
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/noun_portal.png';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Login(){

    const baseUrl ="https://localhost:44390/api/Usuario/fazerlogin";    

    const [data, setData]=useState([]);

    const [usuariolog, setUsuariolog]=useState(
    {
        id: '',
        ApelidoLogin: '',
        senha: ''
    });

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
    
    const usuarioPost = async()=>{
        delete usuariolog.id;
        await axios.post(baseUrl, usuariolog)
        .then(response => {
          setData(response.data);
        }).catch(error=> {
          console.log(error);
        })
      } 
        return(        
        <div className="login">
            <div className="imagemlogin img-fluid">
                <img src={logarimg} alt="Login" />
            </div>

            <div class="camposlogin form-group"> 
                <input type="text" placeholder="Login" name="ApelidoLogin" onChange={handleChange}></input>                
                <input type="password" placeholder="Senha" name="senha" onChange={handleChange} />
            </div>
            <div className="btnconfirma">
                <button class="button" class="btn btn-secondary btn-sm" onClick={()=> usuarioPost()}>Logar</button>
            </div>
            <div className="btncadastrp">
                <Link to="/CadLogin" class="btn btn-info" >Cadastrar login</Link>
            </div>
        </div>
        );    
}



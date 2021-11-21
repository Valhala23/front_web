import React, { useEffect, useState } from 'react';
import	{ useHistory } from 'react-router-dom';
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/noun_portal.png';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Login(){

    const baseUrl ="https://localhost:44390/api/Usuario/fazerlogin";    
    const history = useHistory();

    //const data, setData];

    const [usuariolog, setUsuariolog]=useState(
    {
        id: '',
        ApelidoLogin: '',
        senha: ''
    });

    function validar(user)
    {
        if(user[0].id > 0)
        {
            history.push('/Perfil');
        }else 
        {
            console.log('Nada encontrado')
            console.log('Resultado: '+ user)
        }

    }

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
           validar(response.data);
        }).catch(error=> {
          console.log(error);
        })
      } 
        return(        
        <div className="login">
            <div className="imagemlogin img-fluid">
                <img src={logarimg} alt="Login" />
            </div>

            <div className="camposlogin form-group"> 
                <input type="text" placeholder="Login" name="ApelidoLogin" onChange={handleChange}></input>                
                <input type="password" placeholder="Senha" name="senha" onChange={handleChange} />
            </div>
            <div className="btnconfirma">
                <button className="button" className="btn btn-secondary btn-sm" onClick={()=> usuarioPost()}>Logar</button>
            </div>
            <div className="btncadastrp">
                <Link to="/CadLogin" className="btn btn-info" >Cadastrar login</Link>
            </div>
        </div>
        );    
}



import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/noun_portal.png';
import { Link } from 'react-router-dom'
import api from '../servicos/api'
import axios from 'axios';
//import axios from 'axios';

const Login = props => {

    const Url ="/fazerlogin";    
    const history = useHistory();
    var resposta = usuariolog;

    var [usuariolog, setUsuariolog]=useState(
    {
        id: 0,
        nomelogin: "",
        descricao: "",
        bio: "",
        sexo: null,
        historico: "",
        contato: "",
        observacoes: "",
        foto: "",
        apelidoLogin: "",
        senhalogin: "",
        token: "",
        permissao: 0
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

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: usuariolog
    };
   
    // updateStuff(username, id, stuff){
    //     return Axios.put(`http://localhost:8080/stuff/${username}`,             {
                // headers:{
                //     'Access-Control-Allow-Origin':'*',
                //     'Content-Type': 'application/json;charset=UTF-8',
                // }
    //         })
    //     }
    
    async function usuarioPost(event) {
        //event.preventDefault();
        delete usuariolog.id;
        try 
        {
            fetch('http://10.0.0.144:3055/fazerlogin', requestOptions)
            .then(response => response.json()
            // .then(data => setPostId(data.id)
            
            // const resposta = await axios.post('localhost:3055/fazerlogin', usuariolog,
            // // headres: 
            // {
            //     'Access-Control-Allow-Origin':'*',
            //     'Content-Type': 'application/json;charset=UTF-8',
            // }
            );
            localStorage.setItem('apelido', usuariolog.apelidoLogin)
            // localStorage.setItem('token', response.data.token)
            
            // Apos login Confere se encontrou um usuario 
            // if(response.data.user.id > 0){
            //     setUsuariolog(usuariolog = response.data.user)
            //     console.log('Resultado normal: '+ usuariolog.nomelogin + " senha: " + usuariolog.senhalogin)

            //     const uNome = usuariolog.nomelogin;
            //  classcls
            //     history.push({ pathname: '/Perfil',  usuario: usuariolog })
            // }
        }catch(erro)
        {
            alert("Erro ao logar " + erro);  
        }
    } 
    return(        
    <div className="login">
        <div className="imagemlogin img-fluid">
            <img src={logarimg} alt="Login" />
        </div>

        <div className="camposlogin form-group"> 
            <input type="text" placeholder="Login" name="nomelogin" onChange={handleChange}></input>                
            <input type="password" placeholder="Senha" name="senhalogin" onChange={handleChange} />
        </div>
        <div className="btnconfirma">
            <button class="button" class="btn btn-secondary btn-sm" type="submit">Logar</button>
        </div>
        <div className="btncadastrp">
            <Link to="/CadLogin" class="btn btn-info" >Cadastrar login</Link>
        </div>
    </div>
    );    
    
}


export default Login;
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/noun_portal.png';
import { Link } from 'react-router-dom'
import api from '../servicos/api'
//import axios from 'axios';

const Login = props => {

    const Url ="api/Usuario/fazerlogin";    
    const history = useHistory();

    var [usuariolog, setUsuariolog]=useState(
    {
        id: 0,
        nome: "",
        descricao: "",
        bio: "",
        sexo: null,
        historico: "",
        contato: "",
        observacoes: "",
        foto: "",
        apelidoLogin: "",
        senha: "",
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
    
    async function usuarioPost(event) {
        //event.preventDefault();
        delete usuariolog.id;
        try 
        {
            const resposta = await api.post('https://localhost:44390/api/Usuario/fazerlogin', usuariolog);
            localStorage.setItem('apelido', usuariolog.apelidoLogin)
            localStorage.setItem('token', resposta.data.token)
            
            // Apos login Confere se encontrou um usuario 
            if(resposta.data.user.id > 0){
                setUsuariolog(usuariolog = resposta.data.user)
                console.log('Resultado normal: '+ usuariolog.nome + " senha: " + usuariolog.senha)

                const uNome = usuariolog.nome;
                history.push({ pathname: '/Perfil',  usuario: usuariolog })
            }
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


export default Login;
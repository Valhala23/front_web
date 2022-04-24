import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/academico.png';
import { Link } from 'react-router-dom'
import axios from 'axios';
import qs from 'qs';
//import axios from 'axios';

const Login = props => {  
    const history = useHistory();  

    var [usuariolog, setUsuariolog]=useState(
        {
            username: '',
            password: ''
        }
    );
    const url = 'http://10.0.0.172:3033/blog/login'
    const urlExterno = 'http://45.191.187.35:3033/blog/login'
    

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

        try {
            console.log('tentoulogar')
            const options = {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': true,
                  },
                data: qs.stringify(usuariolog),
                urlExterno,
              };             

            await axios(options) 

            .then(async response => {
                console.log(response.data)
                
                if(response.data){
                    localStorage.setItem('tokens', response.data.access_token)
                    history.push({ pathname: '/Perfil',  usuario: usuariolog })
                    console.log('salvo dados  ' + localStorage.getItem('tokens'))
                  }else{
                    console.log("error ao fazer login");    
                  }

            }).catch(error=> {
              console.log(error);
            })            
        } catch (error) {
            console.log(error);
        }
      }  
    return(        
    <div className="login">
        <div className="imagemlogin img-fluid">
            <img src={logarimg} alt="Login" />
        </div>

        <div className="camposlogin form-group"> 
            <input type="text" placeholder="Login" name="username" onChange={handleChange}></input>                
            <input type="password" placeholder="Senha" name="password" onChange={handleChange} />
        </div>
        <div className="btnconfirma">
            <button className="btn btn-secondary btn-sm" type="submit" onClick={usuarioPost}>Logar</button>
        </div>
        <div className="btncadastrp">
            <Link to="/CadLogin" className="btn btn-info" >Cadastrar login</Link>
        </div>
    </div>
    );    
    
}


export default Login;
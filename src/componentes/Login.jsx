import React from 'react';
import './estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/noun_portal.png';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    cadLogin() {
        console.log('Cadastro login');        
    }
    render() {
        return(        
        <div className="login">
            <div className="imagemlogin img-fluid">
                <img src={logarimg} alt="Login" />
            </div>

            <div class="camposlogin form-group"> 
                <input type="text" placeholder="Login"></input>                
                <input type="password" placeholder="Senha" />
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
}


export default Login;

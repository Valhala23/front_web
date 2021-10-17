import React from 'react';
import './Login.css';
import '../Global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logarimg from '../assets/entrar.png';
function Login(){
    return(        
        <div className="login">
            <div className="container">
                <div className="imagemlogin">
                    <img src={logarimg} alt="Login" />
                </div>
                <div className="row">
                    <div className="col">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input type="text" placeholder="Login"></input>                
                    </div>
                    <div className="col">
                        <input type="password" placeholder="Senha" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button class="button" type="submit">Logar</button>
                    </div>
                </div>                                
            </div>
        </div>
    );    
}


export default Login;

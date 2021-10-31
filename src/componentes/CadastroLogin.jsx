import React from 'react';
import './estilos/CadastroLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function CadLogin(){
    return(        
        <div className="cadstrolog">            
            <div className="row">  
                <div className="col">
                    <div className="menucad">
                        <h1>Cadastro</h1>
                        <h2>Login</h2>
                    </div>  
                </div>              
            </div>
            <form action="">
                <div className="row">
                    <div className="col">
                        <p>nome</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>senha</p>
                    </div>
                    <div className="col">
                        <p>acesso</p>
                    </div>
                </div>
            </form>
        </div>
    );    
}

export default CadLogin;

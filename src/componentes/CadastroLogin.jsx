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
                    <div className="col-4">                        
                        <p>nome</p>
                    </div>
                    <div className="col">
                        <p>acesso</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="text" />
                    </div>
                    <div className="col">
                        <input type='radio' name='group' value='admin' /> Administrador                         
                    </div>
                    <div className="col">
                        <input type='radio' name='group' value='user' />  Usúario 
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <p>senha</p>
                        <input type="password" />
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <div className="col">
                        <button type="button" class="btn btn-secondary">Cadastrar</button>                        
                    </div>
                </div>
            </form>
        </div>
    );    
}

export default CadLogin;

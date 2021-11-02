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
                        <p>Nome</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input type="text" id="log" name="log" />
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
                        <p>Senha</p>
                    </div>
                </div>
                <div className="row">

                </div>
                <div className="row">
                    <div className="col">
                        <p>Acesso</p>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input type="password" name="senha" id="senha" />
                        </div>
                        <div className="col-1">
                            <input type="radio" id="louie" name="drone" value="louie"/>
                        </div>
                        <div className="col-1">
                            <input type="radio" id="louie" name="drone" value="louie"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button style={{float: 'right'}} type="button" class="btn btn-secondary">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );    
}

export default CadLogin;

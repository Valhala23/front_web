import React, { useEffect, useState } from 'react';
import './estilos/CadastroLogin.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function CadLogin(){

    const baseUrl ="https://localhost:44390/api/Usuario";

    const [data, setData]=useState([]);

    const [usuariolog, setUsuariolog]=useState(
    {
        id: '',
        nome: '',
        senha: '',
        ApelidoLogin: '',
        permissao: ''
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
        console.log(usuariolog);
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
        <div className="cadstrolog">            
            <div className="row">  
                <div className="col-4">
                    <div className="menucad">
                        <h1>Cadastro</h1>
                        <h2>Login</h2>
                    </div>  
                </div>              
            </div>
            <div className="formulario">
                <div className="row">
                    <div className="col">
                        <label>Nome</label>
                    </div>
                    <div className="col-4">
                    </div>
                    <div className="col">
                    </div>
                </div>            
                <div className="row">
                    <div className="col-4">
                        <input type="text" name="nome" onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <label>Apelido</label>
                    </div>
                    <div className="col-4">
                        <label>Senha</label>
                    </div>
                    <div className="col">
                        <label>Acesso</label>
                    </div>
                    <div className="row">
                    <div className="col-4">
                            <input type="text" name="ApelidoLogin" onChange={handleChange} />
                        </div>
                        <div className="col-4">
                            <input type="password" name="senha" onChange={handleChange} />
                        </div>
                        <div className="col-1">
                            <input type="radio" name="permissao" value="0" onChange={handleChange}/>Adm

                            <input type="radio" name="permissao" value="1" onChange={handleChange}/>User
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button style={{float: 'right'}} type="button" className="btn btn-secondary" onClick={()=> usuarioPost()}>Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default CadLogin;

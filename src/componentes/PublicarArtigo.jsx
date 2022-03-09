import React, { useEffect, useState } from 'react';
// import	{ useHistory } from 'react-router-dom';
import './estilos/CadastroLogin.css'
import api from '../servicos/api'
import 'bootstrap/dist/css/bootstrap.min.css';
function Publicar(){

    // const baseUrl ="http://localhost:5001/api/Usuario/cadastrarnovo";
    // const history = useHistory();
    // const [data, setData]=useState([]);

    const [artigo, setArtigo]=useState(
        {
          codigo: 0,
          titulo: '',
          descricao: ''
        }
    );  
    
    const handleChange = e=> 
    {
        // Montar objeto usuario
        const {name, value}=e.target;
        setArtigo(
        {
            ...usuariolog,
            [name]: value
        });        
    }  
    
    const artigoPost = async()=>{        
        delete usuariolog.id;

        try {
            await api.post('http://localhost:3055/salvarartigo', usuariolog)
            .then(async response => {
              // setData(response.data);
              if(response.data){
                history.push('/');
              }else{
                console.log("error ao publicar");    
              }
            }).catch(error=> {
              console.log(error);
            })            
        } catch (error) {
            console.log(error);
        }
      }    
    
    return(        
        <div className="publica">            
            <div className="menupublicar">
                <h1>Cadastro</h1>
                <h2>Login</h2>
            </div>
            <div className="formulario">
                <div className="card">   
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <label>Acesso</label>
                            </div>
                        </div>
                    </div>                                          
                </div>
                <div className="camposcad">
                    <div className="row">
                        <div className="col">
                            <label>Nome</label>
                            <input type="text" name="nome" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Apelido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="titulo" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Senha</label>
                            <input type="password" name="descricao" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button style={{float: 'right'}} type="button" className="btn btn-secondary" onClick={()=> artigoPost()}>Cadastrar</button>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    );    
}

export default Publicar;

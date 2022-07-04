import React, { useEffect, useState } from 'react';
import	{ useHistory } from 'react-router-dom';
import './estilos/Publicar.css'
import api from '../servicos/api'
import 'bootstrap/dist/css/bootstrap.min.css';
function Publicar(){

    const history = useHistory();

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
            ...artigo,
            [name]: value
        });        
    }  
    
    const artigoPost = async()=>{        
        delete artigo.codigo;

        try {
            await api.post('http://45.191.187.35:3033/artigo/salvarartigo', artigo, 
            { headers: {          
                Authorization: 'Bearer ' + localStorage.getItem('tokens').toString() 
            }
            })
            .then(async response => {
              if(response.data){
                history.push('/Artigo');
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
                <h1>Publicar</h1>
                <h2>Artigo</h2>
            </div>
            <div className="formulario">
                <div className="camposcad">
                    <div className="row">
                        <div className="col">
                            <label>Observação</label>
                            <input type="text" name="nome" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Titulo</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input type="text" name="titulo" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <label>Descriçao</label>
                            <input type="text" name="descricao" onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button style={{float: 'right'}} type="button" className="btn btn-secondary" onClick={()=> artigoPost()}>Cadastrar</button>
                    </div>
                </div>                                
            </div>            
        </div>
    );    
}

export default Publicar;

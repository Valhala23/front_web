import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';

function Detalhe(){

    const baseUrl ="http://localhost:3033/artigodettalhe";
    const baseUrlExterno ="http://45.191.187.35:3033/artigodettalhe";
    const [data, setData]=useState([]);
    const { id } = useParams()

    const detalhrGet = async()=>{
      await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error=> {
        console.log(error);
      })
    }

    useEffect(()=>{
        detalhrGet();
      })    
      return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h1> Detalhe do artigo Cabecalho </h1>
                        </div>
                    </div>
                </div>                
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2> Conteúdo </h2>
                        </div>
                    </div>
                    <div className="row">                     
                        {data.map(artigo=> (
                            <tr key={artigo.codigo}>
                                <td> {artigo.codigo }</td>
                                <td> {artigo.titulo }</td>
                                <td> {artigo.descricao }</td>
                            </tr>       
                        ))}                                                                  
                    </div>
                    
                    <div className="row">
                        <div className="col">
                        <div className="col">
                            <div className="informacoes" style={{height: '250px'}}>
                                <h3>Imagem 1 </h3>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                            <p>comentarios ao lado </p>
                        </div>
                    </div>

                    <div class="row">
                        <div className="col">
                            <div className="informacoes" style={{height: '200px'}}>
                                <h3>Imagem 2 </h3>
                                </div>
                        </div>

                        <div className="col">
                            <p>comentarios ao lado </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                        <div className="col">
                            <div className="informacoes" style={{height: '150px'}}>
                                <h3>Imagem 3 </h3>
                            </div>
                        </div>
                        </div>

                        <div className="col">
                            <p>comentarios ao lado </p>
                        </div>
                    </div>             
                </div>
            </section>
        
            <section>
                rodape
                <div className="btn-fim-editar">
                    <Link to={`/DetalheArtigoEditar/${id}`}  className="btn btn"> Editar esta publicação: {id}</Link>
                </div>
            </section>
            
        </div>        
    );    
}

export default Detalhe;
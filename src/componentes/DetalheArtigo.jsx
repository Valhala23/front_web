import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';

function Detalhe(){

    const baseUrl ="http://localhost:3033/artigodettalhe";
    const baseUrlExterno ="http://45.191.187.35:3033/artigodettalhe";
    const [data, setData]=useState([]);

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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Detalhe do artigo </h1>
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
                        <h1>Imagem 1 </h1>
                    </div>

                    <div className="col">
                        <p>comentarios ao lado </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>Imagem 2 </h3>
                    </div>

                    <div className="col">
                        <p>comentarios ao lado </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h3>Imagem 3 </h3>
                    </div>

                    <div className="col">
                        <p>comentarios ao lado </p>
                    </div>
                </div>
                

            </div>

        </div>
    );    
}

export default Detalhe;
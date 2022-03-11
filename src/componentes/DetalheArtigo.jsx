import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';

function Detalhe(){

    const baseUrl ="http://localhost:3055/artigodettalhe";
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
                        <h1> Lista de Artigos publicados </h1>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Código</th> <th>Titulo</th> <th>Descrição</th> <th>Detalhar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(artigo=> (
                                <tr key={artigo.codigo}>
                                <td> {artigo.codigo }</td>
                                <td> {artigo.titulo }</td>
                                <td> {artigo.descricao }</td>
                                <td><Link to="/Publicar" class="btn btn"> Ver</Link></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="div">
                    {/* <button className="btn btn-danger" onClick={postarNovo}> Publicar novo </button> */}
                    <Link to="/Publicar" class="btn btn-info" >Publicar novo</Link>
                </div>

            </div>

        </div>
    );    
}

export default Detalhe;
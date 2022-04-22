import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Esp32.scss';

function PainelMestre(){

    const baseUrlListagem ="http://localhost:3033/loginsapi";
    const baseUrlExternoListagem ="http://45.191.187.35:3033/loginsapi";
    const [data, setData]=useState([]);

    const artigoGet = async()=>{
      await axios.get(baseUrlListagem, 
        { headers: {          
            Authorization: 'Bearer ' + localStorage.getItem('tokens').toString() 
        }
      })
      .then(response => {
        setData(response.data);
      }).catch(error=> {
        console.log(error);
      })
    }

    useEffect(()=>{
        artigoGet()
        console.log('Interval triggered');
    }, 1000);      

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Lista de Logins e suas Permissões </h1>
                    </div>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th>Código</th> <th>Nome</th> <th>Permissão</th> <th>Alterar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(login=> (
                                <tr key={login.id}>
                                <td> {login.id }</td>
                                <td> {login.username }</td>
                                <td> {login.roles.length}</td>
                                <td><Link to="/DetalheArtigo" className="btn btn"> Ver: {login.codigo} </Link></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="div">
                    {/* <button className="btn btn-danger" onClick={postarNovo}> Publicar novo </button> */}
                    <Link to="/Publicar" className="btn btn-info" >Publicar novo</Link>
                </div>

            </div>

        </div>
    );    
}

export default PainelMestre;

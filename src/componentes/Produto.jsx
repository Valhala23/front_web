import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import logoCad from '../assets/iconepc.png';

export default function Produto() {

  const baseUrl ="http://10.0.0.172:5001/api/Produtos";

  const [data, setData]=useState([]);

  const pedidoGet = async()=>{
    await axios.get(baseUrl)
    .then(response => {
      setData(response.data);
    }).catch(error=> {
      console.log(error);
    })
  }

  useEffect(()=>{
    pedidoGet();
  })


  return (
    <div className="App">
      <header className="App-header">
          <h3> Learn React </h3>          
            <img src={logoCad} alt='Cadastro' />
          <button className="btn btn-success"> Gravar produto</button>
      </header>
      <div className="container">

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>NOME</th> <th>Quantidade</th> <th>VALOR</th> <th>OPÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {data.map(produto=> (
                  <tr key={produto.id}>
                <td> {produto.nome }</td>
                <td> {produto.quantidade }</td>
                <td> {produto.valor}</td>    
                <td> {produto.opcao}</td>
              <td>
                <button className="btn btn-success">
                  Editar
                </button>
                <button className="btn btn-danger">
                  Deletar
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


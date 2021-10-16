import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logoCad from './assets/iconepc.png';

function Produto() {

  const baseUrl ="https://localhost:44390/api/Produtos";

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
      </header>
      <div class="container">
        <img src={logoCad} alt='Cadastro' />
        <button className="btn btn-success"> Gravar produto</button>


    <table>
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
          <button class="waves-effect btn-small blue darken-1">
            <i class="material-icons">create</i>
          </button>
          <button class="waves-effect btn-small red darken-1">
            <i class="material-icons">delete_sweep</i>
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

export default Produto;

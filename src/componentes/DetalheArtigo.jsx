import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';

function Detalhe(){

    const baseUrl ="http://localhost:3055/artigolista";
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

}
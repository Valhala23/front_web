import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';

function Detalhe(){
    
    const { id } = useParams();    
    const baseUrl ="http://localhost:3033/artigo/artigodettalhe";
    const baseUrlExterno ="http://45.191.187.35:3033/artigo/artigodettalhe";

    const formData = new FormData();
    formData.append('idArtigo', id);
    const [artigos, setArtigos]=useState([]);
    const [imageUrl, setImageUrl] = useState(null);  
    
    const detalhrGet = async()=>{
      await axios.post(baseUrl, formData,
        {          
            headers: {          
                Authorization: 'Bearer ' + localStorage.getItem('tokens').toString(),
                'Content-Type': 'multipart/form-data'            
            }
        })
      .then(response => {
        // console.log("Dados recebidos: ");
        // console.log(response.data);
        setArtigos(response.data);
      }).catch(error=> {
        console.log(error);
      })
    }

    useEffect(()=>{
        detalhrGet();

        if (artigos && (imageUrl == null)) {
            //console.log("esperou e carregou dados")
            setImageUrl('data:image/jpeg;base64,' + artigos.fotoPublicacao )//+ artigos[].imagem)
        }
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
                        {artigos.map(artigo=> (
                            <tr key= {artigo.codigo}>
                                <td> {artigo.codigo }</td>
                                <td> {artigo.titulo }</td>
                                <td> {artigo.descricao }</td>
                                <td>{artigo.codigo? <img style={{ width: "95%", height: "85%", margin: "10px 5px" }} src={imageUrl} /> : null}</td>
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
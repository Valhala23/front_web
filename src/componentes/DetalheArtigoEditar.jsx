import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './estilos/Detal.css';
import Button from '@material-ui/core/Button';

function EditarDetalhe(){

    const baseUrl ="http://localhost:3033/artigodettalhe";
    const baseUrlExterno ="http://45.191.187.35:3033/artigodettalhe";
    const [data, setData]=useState([]);
    const { id } = useParams()

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const detalhrGet = async()=>{
      await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error=> {
        console.log(error);
      })
    }

    useEffect(() => {   
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
        
      }, [selectedImage]);

    // codigo para postar foto inicio
    function postarFoto () {
        if (!selectedImage) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedImage);
        // axios.post(baseUrlExterno, formData,
        //     {          
        //         headers: {          
        //             Authorization: 'Bearer ' + localStorage.getItem('tokens').toString()            
        //         }
        //     })
        //     .then(res => {
        //             alert("Imagem salva com sucesso.")
        //     })
    };
    // fim postar foto    

      return(
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h1> Editar os detalhe do artigo: {id} </h1>
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
                            <div className="informacoes" style={{height: '250px'}}>
                                {selectedImage? <img style={{ width: "95%", height: "85%", margin: "10px 5px" }} src={imageUrl} /> : null}
                            </div>
                        </div>
                        </div>

                        <div className="col">
                            <textarea style={{width: '100%'}} name="txtdetal" id="txtdetal" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="imagem-detalhe">
                        <div className="row">
                        <input
                            accept="image/*"
                            type="file"
                            id="select-image"
                            style={{ display: 'none' }}
                            onChange={e => setSelectedImage(e.target.files[0])}
                        />
                        <label htmlFor="select-image">
                            <Button variant="contained" size='small' color="secondary" component="span">
                                Buscar foto
                            </Button>
                        </label>
                        </div>
                        <div className="row">
                            <button onClick={postarFoto()} type="button" class="btn btn-secondary">Publicar imagem</button>
                        </div>

                    </div>                    

            </section>
        
            <section>
                rodape
                <div className="btn-fim-editar">
                    <button onClick={console.log(id)} type="button" class="btn btn-secondary">Confirmar</button>
                </div>
            </section>
            
        </div>        
    );    
}

export default EditarDetalhe;
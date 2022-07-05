import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../estilos/Detal.css';
import Button from '@material-ui/core/Button';

function BotaoPostarFoto() {
    const [detalheArtigo, setDetalheArtigo] =
    useState(
        {
            titulo: '',
            descricao: '',
            codArtigo: 0
        }
    );

    const baseUrl ="http://localhost:3033/artigo/foto";
    const baseUrlExterno ="http://45.191.187.35:3033/artigo/foto";
    const baseUrlArtigoExterno ="http://45.191.187.35:3033/artigo/salvardetalhe";

    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleChange = e=> 
    {
        // Montar objeto usuario
        const {name, value}=e.target;
        setDetalheArtigo(
        {
            ...detalheArtigo,
            [name]: value
        });        
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
        console.log("Imagem selecionada okei, tentando postar.. ")
        let formData = new FormData();
        formData.append('detalheArtigo', id);
        formData.append('image', selectedImage);

        // Requisicao para postar imagem
        axios.post(baseUrlExterno, formData,
            {          
                headers: {          
                    Authorization: 'Bearer ' + localStorage.getItem('tokens').toString(),
                    'Content-Type': 'multipart/form-data'            
                }
            })
            .then(res => {
                    alert("Imagem salva com sucesso.")
            })
    };
    // fim postar foto

    const artigoDetalhePost = async()=>{        

        try {
            detalheArtigo.codArtigo = id;
            await axios.post(baseUrlArtigoExterno, detalheArtigo, 
            { headers: {          
                Authorization: 'Bearer ' + localStorage.getItem('tokens').toString() 
            }
            })            
        } catch (error) {
            console.log(error);
        }
    }
 

    return(
    <div>
        <section>
            <div className="container">
                <div className="row">

                </div>
            </div>                
        </section>

        <section>
            <div className="container">                      
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
                        <button onClick={postarFoto} type="button" class="btn btn-secondary">Publicar imagem</button>
                    </div>

                </div> 
            </div>                   

        </section>
    
        <section>
            rodape
            <div >
            </div>
        </section>
        
    </div>        
    );    
}


export default BotaoPostarFoto;
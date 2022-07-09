import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/Detal.css';
import Button from '@material-ui/core/Button';

class BotaoPostarFoto extends React.Component {
 
    render(){
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
                            // onChange={e => setSelectedImage(e.target.files[0])}
                        />
                        <label htmlFor="select-image">
                            <Button variant="contained" size='small' color="secondary" component="span">
                                Buscar foto
                            </Button>
                        </label>
                        </div>
                        <div className="row">
                            <button type="button" class="btn btn-secondary">Publicar imagem</button>
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
        )
    }
}


export default BotaoPostarFoto;
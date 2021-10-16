import React from 'react';
import { Link } from 'react-router-dom'
function Navegacao(){
    return(
        <nav>
            <h3>
                <Link to='/'>
                    <ul>Principal</ul>
                </Link>

                <Link to='/Produto'>
                    <ul>Produto</ul>
                </Link>                 
            </h3>
        </nav>
    );    
}


export default Navegacao;

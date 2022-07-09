import React from 'react';
import '../estilos/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Cartao extends React.Component{  
    render(){
        return(        
        <div className="card mb-3">
            <div className="card-header">{this.props.title}</div>
            <div className="card-body">
                {this.props.children}                
            </div>
        </div>
        );    
    }
}


export default Cartao;
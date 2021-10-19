import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produto from './Produto';
import Login from './Login';
export default function Rotas(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/Produto" component={Produto}/>
            </Switch>
        </Router>        
    );    
}

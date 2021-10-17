import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Produto from './Produto';
import Login from './Login';
export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}>
                    <ul>Principal</ul>
                </Route>

                <Route path='/Produto' exact component={Produto}>
                    <ul>Produto</ul>
                </Route>
            </Switch>
        </BrowserRouter>        
    );    
}

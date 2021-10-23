import React from 'react'
import Produto from './Produto';
import Login from './Login';
import Esp32 from './Esp32';
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Navegacao = () => {
    return (
        <Router>
        <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Produto">Produtos</Link>
                </li>

                <li>
                    <Link to="/Esp">Esp32</Link>
                </li>
            </ul>
        </nav>

        <Switch>
            <Route exact path="/"> <Login/>  </Route>
            <Route path="/Produto"> <Produto/>  </Route>
            <Route path="/Login"> <Login/>  </Route>
            <Route path="/Esp"> <Esp32/>  </Route>
        </Switch>
        </div>
        </Router>
    )
}

export default Navegacao

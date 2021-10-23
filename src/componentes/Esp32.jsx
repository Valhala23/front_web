import React, { Component, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Esp32.scss';

function Esp32(){
    var logado  = false;
    var baseUrl ="http://10.0.0.121/";
    var status ="L";

    const Logar = () =>  {        
        if (logado)
        { 
            status = 'H';        
        } else
        {
            status = 'L';
        }
        // Alternar valor 
        logado = !logado;
    }

    const Led = async () =>  {        
        Logar();

        await axios.get(baseUrl+status)
           console.log('Deveria acender ou apagar o led!!');
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1> Funções da plaquinha Esp </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="toggle-switch">
                        <input type="checkbox" onChange={Led} className="toggle-switch-checkbox"  name="toggleSwitch" id="toggleSwitch" />
                        <label className="toggle-switch-label" htmlFor="toggleSwitch">
                            <span className="toggle-switch-inner" />
                            <span className="toggle-switch-switch" />
                        </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );    
}


export default Esp32;

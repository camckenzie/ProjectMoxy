import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbarbtn from './components/Navbarbtn/Navbarbtn';
import Routes from './Routes';
import Login from './components/pages/Login';

ReactDOM.render(

    <Router>
        <div className="App">
            <Login />
            <Routes />
        </div>
    </Router>, 
    document.getElementById('root')
);


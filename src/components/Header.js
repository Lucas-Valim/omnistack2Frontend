import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import logo from '../assets/instagram-brands.svg';
import camera from '../assets/camera-solid.svg';


export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="InstaRocket" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar publicação" />
                </Link>
            </div>
        </header>
    );
}

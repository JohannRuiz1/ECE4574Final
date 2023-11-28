import React from 'react';

import './Header.css';
import wikiLogo from './wikiLogo.png'

const Header = () => (
    <div className='header'>
        <img src={wikiLogo} className='logo'></img>
        <h1>WikiCareers</h1>
    </div>
)
export default Header;


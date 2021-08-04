import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    console.log('sup')
    console.log(window.location.hash)
    console.log('yo')
    if (window.location.hash === '#/login') return null;
    return (
    null
    );
}


export default Header;

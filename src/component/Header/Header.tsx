import React from 'react';
import './Header.scss';
import {Typography} from "@mui/material";
const Header = () => {
    return (
        <header className='header'>
            <img src='https://www.sstu.ru/local/templates/www/img/logo_small.svg' alt='logo'/>
            <Typography variant='h5' color='white'>Абитуриенту</Typography>
        </header>
    );
};

export default Header;
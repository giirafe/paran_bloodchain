import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from './header';
import {Link} from 'react-router-dom';

function home() {
    const Header = () => {
        return (
            <Header />
        )
    }
    return(
        <div>userHome</div>
    );
}

export default home;
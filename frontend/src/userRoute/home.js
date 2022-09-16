import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './home.css';

function home() {
    return(
        <body>
            <Header/>
                <h1 className="NFT"></h1>
            <Link to = "/providekey">
                 <button className="submain-btn" onClick="hi">조회 기관 키 제공</button>
            </Link>

        </body>
        

    );
}

export default home;
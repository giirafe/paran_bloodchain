import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './providekey.css';


function providekey() {

    
    return(
        <body>
            <Header/>
            조회기관에게 키 제공하는 페이지입니다.
        </body>
        

    );
}

export default providekey;


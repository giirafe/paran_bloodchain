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
            조회 기관 키 제공하는 페이지 입니다.
        </body>
        

    );
}

export default providekey;
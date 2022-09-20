import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../../components/layout/header';
import {Link} from 'react-router-dom';
import './providekey.css';


function providekey() {

    
    return(
        <body>
            <Header/>
        <div className = "SerialNumber">
            <h1>조회 키 일련번호 생성</h1>

        </div>
        </body>
        

    );
}

export default providekey;


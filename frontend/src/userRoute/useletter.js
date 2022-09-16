import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './useletter.css';

function useletter() {
    return(
        <body>
            <Header/>
            증서를 사용하는 페이지 입니다.
        </body>
        

    );
}

export default useletter;
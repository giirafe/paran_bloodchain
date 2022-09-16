import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';
import './myinfo.css';

function myinfo() {
    return(
        <body>
            <Header/>
            내정보를 열람하는 페이지 입니다.
        </body>
        

    );
}

export default myinfo;
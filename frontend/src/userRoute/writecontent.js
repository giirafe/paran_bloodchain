import '../App.css';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import Header from '../components/layout/header';
import {Link} from 'react-router-dom';


function writecontent() {
    return(
        <body>
            <Header/>
            헌혈증서 기부를 받을 수 있도록 글을 작성하는 페이지입니다. 
        </body>
        
    );
}

export default writecontent;